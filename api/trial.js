import { usageStore, FREE_LIMIT, hashIP, getClientIP } from './_trial-store.js';

export default async function handler(req, res) {
  const ip = getClientIP(req);
  const key = hashIP(ip);

  if (req.method === 'GET') {
    const record = usageStore[key] || { count: 0 };
    return res.status(200).json({
      used: record.count,
      limit: FREE_LIMIT,
      canGenerate: record.count < FREE_LIMIT
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
