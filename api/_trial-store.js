// Shared in-memory store across API routes (same Vercel instance)
// For production scale: replace with Vercel KV — just swap get/set calls
export const usageStore = {};
export const FREE_LIMIT = 1;

export function getClientIP(req) {
  return (
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'unknown'
  );
}

export function hashIP(ip) {
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    hash = ((hash << 5) - hash) + ip.charCodeAt(i);
    hash |= 0;
  }
  return 'u_' + Math.abs(hash).toString(36);
}
