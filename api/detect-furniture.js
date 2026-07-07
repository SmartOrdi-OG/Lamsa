export default async function handler(req, res) {
  console.log('[api/detect-furniture] handler invoked, method:', req.method);

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const ANTHROPIC_API_KEY = (process.env.ANTHROPIC_API_KEY || '').trim();
  if (!ANTHROPIC_API_KEY) {
    console.error('[api/detect-furniture] ANTHROPIC_API_KEY not configured');
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured' });
  }

  const { image_data, image_url, mime_type = 'image/jpeg' } = req.body;
  if (!image_data && !image_url) {
    return res.status(400).json({ error: 'image_data or image_url is required' });
  }

  const imageSource = image_url
    ? { type: 'url', url: image_url }
    : { type: 'base64', media_type: mime_type, data: image_data.includes(',') ? image_data.split(',')[1] : image_data };

  const prompt =
    'Look at this room photo. List all furniture pieces you see.\n' +
    'Return ONLY a JSON array: [{"name":"sofa","emoji":"🛋️"},{"name":"bed","emoji":"🛏️"}]\n' +
    'No explanation, just the JSON.';

  const body = {
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: [
          { type: 'image', source: imageSource },
          { type: 'text', text: prompt }
        ]
      }
    ]
  };

  console.log('[api/detect-furniture] sending request to Claude, model:', body.model, 'source type:', imageSource.type);

  try {
    const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(body)
    });

    console.log('[api/detect-furniture] Claude http status:', claudeRes.status);

    if (!claudeRes.ok) {
      const err = await claudeRes.text();
      console.error('[api/detect-furniture] Claude API error:', claudeRes.status, err);
      return res.status(claudeRes.status).json({ error: 'Furniture detection failed', details: err });
    }

    const data = await claudeRes.json();
    console.log('[api/detect-furniture] Claude response stop_reason:', data.stop_reason);

    if (data.stop_reason === 'refusal') {
      console.error('[api/detect-furniture] Claude refused the request');
      return res.status(502).json({ error: 'The model declined to analyze this image' });
    }

    const textBlock = (data.content || []).find(function (b) { return b.type === 'text'; });
    const rawText = textBlock ? textBlock.text : '';

    let furniture;
    try {
      const jsonMatch = rawText.match(/\[[\s\S]*\]/);
      furniture = JSON.parse(jsonMatch ? jsonMatch[0] : rawText);
    } catch (parseErr) {
      console.error('[api/detect-furniture] failed to parse furniture JSON from model output:', rawText);
      return res.status(502).json({ error: 'Could not parse furniture list from model response', raw: rawText });
    }

    console.log('[api/detect-furniture] detected furniture:', furniture);
    return res.status(200).json({ furniture });

  } catch (err) {
    console.error('[api/detect-furniture] error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
