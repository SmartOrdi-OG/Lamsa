import { useEffect, useState } from 'react';

// Same two-stage Flux -> Nano Banana Pro pipeline every other Lamsa tool
// uses (see design-3d.html's "Generate photoreal" feature), fed the
// Engineers 3D viewport's own screenshot instead of a user photo. Costs
// the regular 1 generation credit — this is intentionally NOT part of the
// Engineers subscription, it's optional and billed through the same
// shared credits system as the rest of the app.
const POLL_INTERVAL_MS = 3000;
const POLL_TIMEOUT_MS = 2 * 60 * 1000;

const PHOTOREAL_PROMPT =
  'Transform this 3D render of an architectural floor plan into a professional, photorealistic architectural visualization of the exact same building.\n\n' +
  'CRITICAL — do not change anything structural: keep the exact same room layout, wall positions, door and window placement, staircases, columns, number of floors, and camera angle. Do not add, remove, move, or resize any structural element.\n\n' +
  'Only improve: make every material look real and tactile (genuine paint, wood, stone, brick, metal and glass), add realistic, professional architectural-visualization lighting with soft natural shadows, and photorealistic rendering quality, like a real estate marketing render.';

// Apple product ids for the credits plans — must match APPLE_IAP_PLANS in api/_stripe.js.
const APPLE_CREDITS_PRODUCT_ID = { weekly: 'com.lamsaai.app.credits.weekly', monthly: 'com.lamsaai.app.credits.monthly' };

const PHOTOREAL_REFINE_PROMPT =
  'This photo already shows a photorealistic architectural visualization. Your ONLY task is to further enhance photorealism, material detail, and lighting quality. Do NOT change the building layout, camera angle, or structural elements in any way — this is a quality-enhancement pass only.';

function fetchJson(url, options) {
  return fetch(url, options).then((res) => res.json().then((data) => ({ ok: res.ok, status: res.status, data })));
}

function extractResultImages(data) {
  if (!data) return null;
  if (Array.isArray(data.images) && data.images.length) return data.images;
  if (data.image && data.image.url) return [data.image];
  if (data.output && Array.isArray(data.output.images) && data.output.images.length) return data.output.images;
  if (data.response && Array.isArray(data.response.images) && data.response.images.length) return data.response.images;
  if (data.data && Array.isArray(data.data.images) && data.data.images.length) return data.data.images;
  return null;
}

function pollForResult(requestId, model, startTime) {
  return new Promise((resolve, reject) => {
    function tick() {
      if (Date.now() - startTime >= POLL_TIMEOUT_MS) { reject(new Error('timeout')); return; }
      fetchJson('/api/status?request_id=' + encodeURIComponent(requestId) + '&model=' + encodeURIComponent(model))
        .then((result) => {
          if (!result.ok) { reject(new Error('status_error')); return; }
          const status = (result.data.status || '').toString().toUpperCase();
          if (status === 'COMPLETED') {
            fetchJson(
              '/api/status?request_id=' + encodeURIComponent(requestId) + '&model=' + encodeURIComponent(model) + '&mode=result&tool=engineers'
            )
              .then((resultResp) => {
                if (!resultResp.ok) { reject(new Error('result_error')); return; }
                const images = extractResultImages(resultResp.data);
                resolve(images && images.length ? images[0] : null);
              })
              .catch(() => reject(new Error('connection_error')));
          } else if (status === 'FAILED' || status === 'ERROR') {
            reject(new Error('failed'));
          } else {
            setTimeout(tick, POLL_INTERVAL_MS);
          }
        })
        .catch(() => reject(new Error('connection_error')));
    }
    tick();
  });
}

function refineWithNano(fluxImage, refineToken) {
  if (!refineToken) return Promise.resolve(fluxImage);
  return fetchJson('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ prompt: PHOTOREAL_REFINE_PROMPT, image_url: fluxImage.url, refine_token: refineToken })
  })
    .then((result) => {
      if (!result.ok || !result.data || !Array.isArray(result.data.requests) || !result.data.requests.length) return fluxImage;
      const req = result.data.requests[0];
      return pollForResult(req.request_id, req.model, Date.now())
        .then((image) => image || fluxImage)
        .catch(() => fluxImage);
    })
    .catch(() => fluxImage);
}

const overlayStyle = {
  position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999,
  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, overflowY: 'auto'
};
const cardStyle = {
  position: 'relative', background: '#fff', borderRadius: 20, padding: '28px 22px',
  maxWidth: 420, width: '100%', textAlign: 'center', boxShadow: '0 30px 70px -25px rgba(0,0,0,0.5)'
};

export default function PhotoRealModal({ captureImage, onClose, t }) {
  const [phase, setPhase] = useState('loading'); // loading | result | error | no_credits
  const [resultUrl, setResultUrl] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [checkoutLoading, setCheckoutLoading] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      const dataUrl = captureImage && captureImage();
      if (!dataUrl) {
        if (!cancelled) { setPhase('error'); setErrorMsg(t('Something went wrong, please try again')); }
        return;
      }
      try {
        const uploadRes = await fetchJson('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image_data: dataUrl, mime_type: 'image/jpeg' })
        });
        if (cancelled) return;
        if (!uploadRes.ok || !uploadRes.data || !uploadRes.data.url) {
          setPhase('error');
          setErrorMsg(t('Image upload failed. Please try again.'));
          return;
        }

        const genRes = await fetchJson('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ prompt: PHOTOREAL_PROMPT, image_url: uploadRes.data.url, num_images: 1, guidance_scale: 6.5, strength: 0.45 })
        });
        if (cancelled) return;
        if (genRes.status === 401) {
          window.location.href = '/lamsa-auth.html?return=engineers/index.html';
          return;
        }
        if (genRes.status === 402) {
          setPhase('no_credits');
          return;
        }
        if (!genRes.ok || !genRes.data || !Array.isArray(genRes.data.requests) || !genRes.data.requests.length) {
          setPhase('error');
          setErrorMsg(t('Error generating image. Please try again.'));
          return;
        }

        const fluxReq = genRes.data.requests[0];
        const refineToken = genRes.data.refineToken;
        const fluxImage = await pollForResult(fluxReq.request_id, fluxReq.model, Date.now());
        if (cancelled) return;
        if (!fluxImage) {
          setPhase('error');
          setErrorMsg(t('Error generating image. Please try again.'));
          return;
        }
        const finalImage = await refineWithNano(fluxImage, refineToken);
        if (cancelled) return;
        setResultUrl(finalImage.url);
        setPhase('result');
      } catch (err) {
        if (cancelled) return;
        setPhase('error');
        setErrorMsg(t('Connection error. Please try again.'));
      }
    }

    run();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDownload() {
    if (!resultUrl) return;
    const filename = 'lamsa-engineers-render.jpg';
    // `<a download>` is silently ignored inside the iOS Capacitor WebView
    // (and for cross-origin URLs generally) — it just opens the image
    // instead of saving it. Sharing the actual bytes as a File triggers the
    // native "Save Image" share sheet on iOS/Android instead; this mirrors
    // the fix already shipped for every other download button in the app
    // (see lamsa-bilingual.html's createDownloadBtn).
    fetch('/api/download-image?url=' + encodeURIComponent(resultUrl) + '&filename=' + encodeURIComponent(filename))
      .then((r) => r.blob())
      .then((blob) => {
        const file = new File([blob], filename, { type: blob.type || 'image/jpeg' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          return navigator.share({ files: [file] });
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 5000);
      })
      .catch(() => window.open(resultUrl, '_blank'));
  }

  function handleSubscribe(planId) {
    setCheckoutLoading(planId);
    if (window.isCapacitorApp) {
      window.LamsaIAP.purchase(APPLE_CREDITS_PRODUCT_ID[planId]).then((result) => {
        if (result.cancelled || !result.ok) {
          setCheckoutLoading(null);
          return;
        }
        window.location.reload();
      });
      return;
    }
    fetchJson('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ plan: planId, return_page: 'engineers/index.html' })
    })
      .then((result) => {
        if (result.status === 401) {
          window.location.href = '/lamsa-auth.html?return=engineers/index.html';
          return;
        }
        if (!result.ok || !result.data || !result.data.url) {
          setCheckoutLoading(null);
          return;
        }
        window.location.href = result.data.url;
      })
      .catch(() => setCheckoutLoading(null));
  }

  if (phase === 'loading') {
    return (
      <div style={overlayStyle}>
        <div style={cardStyle}>
          <div
            style={{
              width: 48, height: 48, margin: '0 auto 18px', border: '4px solid #eef0f2',
              borderTopColor: '#c9a96e', borderRadius: '50%', animation: 'lamsa-pr-spin 0.9s linear infinite'
            }}
          />
          <style>{'@keyframes lamsa-pr-spin { to { transform: rotate(360deg); } }'}</style>
          <div style={{ fontSize: 16, fontWeight: 900, color: '#1b1e22', marginBottom: 6 }}>
            {t('Turning your design into a photoreal render...')}
          </div>
          <div style={{ fontSize: 12.5, color: '#767d86' }}>{t('Takes 20-40 seconds')}</div>
        </div>
      </div>
    );
  }

  if (phase === 'error') {
    return (
      <div style={overlayStyle}>
        <div style={cardStyle}>
          <div style={{ color: '#e05555', fontSize: 14, fontWeight: 700, marginBottom: 18 }}>{errorMsg}</div>
          <button
            type="button"
            onClick={onClose}
            style={{ width: '100%', background: 'transparent', border: '1px solid #dfe2e6', color: '#767d86', padding: 10, borderRadius: 10, fontSize: 13, cursor: 'pointer' }}
          >
            {t('Close')}
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'no_credits') {
    return (
      <div style={overlayStyle}>
        <div style={{ ...cardStyle, maxWidth: 440 }}>
          <div style={{ fontSize: 17, fontWeight: 900, color: '#1b1e22', marginBottom: 8 }}>{t("You're out of credits")}</div>
          <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 20 }}>
            {t('Subscribe to generate photoreal renders of your floor plans.')}
          </div>
          <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
            <button
              type="button"
              disabled={!!checkoutLoading}
              onClick={() => handleSubscribe('weekly')}
              style={{ flex: 1, border: '1px solid #dfe2e6', borderRadius: 14, padding: '14px 8px', background: '#fff', cursor: 'pointer', opacity: checkoutLoading ? 0.6 : 1 }}
            >
              <div style={{ fontSize: 13, fontWeight: 900, color: '#1b1e22' }}>{t('Weekly')}</div>
              <div style={{ fontSize: 11, color: '#767d86', marginBottom: 6 }}>10 {t('credits')}</div>
              <div style={{ fontSize: 15, fontWeight: 900, color: '#1b1e22' }}>€5.99</div>
            </button>
            <button
              type="button"
              disabled={!!checkoutLoading}
              onClick={() => handleSubscribe('monthly')}
              style={{ flex: 1, border: '2px solid #c9a96e', borderRadius: 14, padding: '14px 8px', background: '#fdf6ea', cursor: 'pointer', opacity: checkoutLoading ? 0.6 : 1 }}
            >
              <div style={{ fontSize: 13, fontWeight: 900, color: '#1b1e22' }}>{t('Monthly')}</div>
              <div style={{ fontSize: 11, color: '#767d86', marginBottom: 6 }}>40 {t('credits')}</div>
              <div style={{ fontSize: 15, fontWeight: 900, color: '#1b1e22' }}>€14.99</div>
            </button>
          </div>
          <button type="button" onClick={onClose} style={{ width: '100%', background: 'transparent', border: 'none', color: '#767d86', padding: 8, fontSize: 13, cursor: 'pointer' }}>
            {t('Close')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={overlayStyle}>
      <div style={{ ...cardStyle, maxWidth: 460, textAlign: 'start' }}>
        <img src={resultUrl} alt="" style={{ width: '100%', borderRadius: 12, display: 'block', marginBottom: 14 }} />
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            type="button"
            onClick={handleDownload}
            style={{ flex: 1, background: '#c9a96e', color: '#1b1e22', border: 'none', padding: 14, borderRadius: 10, fontWeight: 900, fontSize: 14, cursor: 'pointer' }}
          >
            {t('Download')}
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{ flex: 1, background: 'transparent', border: '1px solid #dfe2e6', color: '#767d86', padding: 14, borderRadius: 10, fontSize: 14, cursor: 'pointer' }}
          >
            {t('Close')}
          </button>
        </div>
      </div>
    </div>
  );
}
