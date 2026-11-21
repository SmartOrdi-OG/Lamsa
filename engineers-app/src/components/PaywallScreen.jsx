import { useState } from 'react';
import { startEngineerCheckout } from '../api/client.js';

export default function PaywallScreen({ status, t }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleStart() {
    setLoading(true);
    setError(null);
    const result = await startEngineerCheckout();
    if (result.status === 401) {
      window.location.href = '/lamsa-auth.html';
      return;
    }
    if (!result.ok || !result.data || !result.data.url) {
      setError((result.data && result.data.error) || t('Something went wrong, please try again'));
      setLoading(false);
      return;
    }
    window.location.href = result.data.url;
  }

  const lapsed = status === 'canceled' || status === 'past_due' || status === 'unpaid';

  return (
    <div style={{ maxWidth: 480, margin: '80px auto', padding: 24, textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 24, fontWeight: 900, marginBottom: 8 }}>{t('Lamsa Engineers')}</h1>
      <p style={{ color: '#6b7280', marginBottom: 24 }}>
        {lapsed
          ? t('Your Engineers access has ended. Subscribe again to continue designing full floor plans.')
          : t('Design complete floor plans, preview them in 3D, and export real architectural deliverables.')}
      </p>
      <ul style={{ textAlign: 'start', listStyle: 'none', padding: 0, marginBottom: 28, color: '#374151', fontSize: 14 }}>
        <li>— {t('Rectangular rooms, doors & windows, single-floor plans')}</li>
        <li>— {t('Live 3D preview of your design')}</li>
        <li>— {t('Printable floor plan export')}</li>
        <li>— {t("Use Lamsa's existing furniture-styling tools per room")}</li>
      </ul>
      <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 4 }}>$300<span style={{ fontSize: 14, fontWeight: 600, color: '#6b7280' }}> {t('/ year')}</span></div>
      <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 20 }}>{t('14-day free trial, cancel anytime')}</div>
      <button
        type="button"
        onClick={handleStart}
        disabled={loading}
        style={{
          width: '100%', background: '#c9a96e', color: '#1b1e22', border: 'none',
          padding: 16, borderRadius: 14, fontSize: 16, fontWeight: 900, cursor: 'pointer',
          opacity: loading ? 0.6 : 1
        }}
      >
        {loading ? t('Starting…') : t('Start free trial')}
      </button>
      {error && <div style={{ color: '#e05555', fontSize: 13, marginTop: 10 }}>{error}</div>}
    </div>
  );
}
