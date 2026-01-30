// utils/rateLimiter.js
// Optional Upstash-backed rate limiter with in-memory fallback.

const WINDOW_SECONDS = Number(process.env.RATE_LIMIT_WINDOW_SECONDS || 60);
const MAX_REQUESTS = Number(process.env.RATE_LIMIT_MAX || 30);

const useUpstash = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
);

async function checkRateLimitUpstash(key) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return true;

  try {
    // INCR the key
    await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ cmd: ['incr', key] })
    });

    // set expire only if not set (SETEX semantics via EXPIRE)
    await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ cmd: ['expire', key, WINDOW_SECONDS] })
    });

    // get current value
    const r = await fetch(url + '/' + encodeURIComponent(key), {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
    });
    const j = await r.json();
    const val = Number(j.result);
    return Number.isNaN(val) ? true : val <= MAX_REQUESTS;
  } catch (e) {
    console.error('Upstash rate limit error', e);
    return true;
  }
}

// in-memory fallback
global.__rl = global.__rl || new Map();
function checkRateLimitMemory(key) {
  const now = Date.now();
  const entry = global.__rl.get(key) || { count: 0, start: now };
  if (now - entry.start > WINDOW_SECONDS * 1000) {
    entry.count = 1;
    entry.start = now;
    global.__rl.set(key, entry);
    return true;
  }
  if (entry.count >= MAX_REQUESTS) return false;
  entry.count++;
  global.__rl.set(key, entry);
  return true;
}

export default async function checkRateLimit(req) {
  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'local')
    .toString()
    .split(',')[0]
    .trim();
  const key = `rl:${ip}`;
  if (useUpstash) return await checkRateLimitUpstash(key);
  return checkRateLimitMemory(key);
}
