const store = require('./_trial-store');

module.exports = async function handler(req, res) {
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  const key = 'u_' + Math.abs([...ip].reduce((h,c)=>((h<<5)-h+c.charCodeAt(0))|0, 0)).toString(36);

  if (req.method === 'GET') {
    const record = store.usage[key] || { count: 0 };
    return res.status(200).json({ used: record.count, limit: 1, canGenerate: record.count < 1 });
  }
  return res.status(405).json({ error: 'Method not allowed' });
};
