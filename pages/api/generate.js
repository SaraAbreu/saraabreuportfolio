import checkRateLimit from '../../utils/rateLimiter';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') return res.status(405).end();

    const ok = await checkRateLimit(req);
    if (!ok) return res.status(429).json({ error: 'rate_limited' });

    const body = req.body || {};
    const prompt = String(body.prompt || 'Artwork')
      .slice(0, 500)
      .trim();
    const style = String(body.style || 'default')
      .slice(0, 100)
      .trim();
    const count = Math.max(1, Math.min(12, Number(body.count) || 6));
    const aspect = ['4:3', '16:9', '1:1'].includes(body.aspect) ? body.aspect : '4:3';

    const OPENAI_KEY = process.env.OPENAI_API_KEY;
    if (OPENAI_KEY) {
      try {
        const resp = await fetch('https://api.openai.com/v1/images/generations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${OPENAI_KEY}` },
          body: JSON.stringify({
            prompt: `${prompt} — style: ${style}`,
            n: count,
            size: '1024x1024'
          })
        });
        const j = await resp.json();
        if (j && j.data && Array.isArray(j.data)) {
          const images = j.data
            .map((d) => {
              if (d.b64_json)
                return {
                  src: `data:image/png;base64,${d.b64_json}`,
                  thumb: `data:image/png;base64,${d.b64_json}`
                };
              if (d.url) return { src: d.url, thumb: d.url };
              return null;
            })
            .filter(Boolean);
          return res.status(200).json({ images });
        }
      } catch (err) {
        console.error('OpenAI generate error', err);
      }
    }

    // Procedural SVG generation fallback
    const makeImagePair = (i) => {
      const seed = Math.abs(hashCode(prompt + '|' + style + '|' + i));
      const hue = seed % 360;
      const w = 1024,
        h = 768;
      const tw = 420,
        th = 315;

      const rand = (max, n = 1) => Math.abs((seed * (n + 1) * 9301 + 49297) % 233280) % max;
      let shapes = '';
      const shapeCount = 5 + (seed % 6);
      for (let s = 0; s < shapeCount; s++) {
        const sx = ((rand(90, s) + 5) / 100) * w;
        const sy = ((rand(80, s + 1) + 10) / 100) * h;
        const sw = ((rand(30, s + 2) + 10) / 100) * w;
        const sh = ((rand(30, s + 3) + 10) / 100) * h;
        const op = (30 + rand(70, s + 4)) / 1000 + 0.05;
        const fillHue = (hue + s * 25) % 360;
        const shapeType = ['circle', 'rect', 'ellipse', 'polygon'][s % 4];
        if (shapeType === 'circle')
          shapes += `<circle cx='${sx}' cy='${sy}' r='${
            Math.max(sw, sh) / 2
          }' fill='hsl(${fillHue} 70% 60%)' opacity='${op}' />`;
        else if (shapeType === 'ellipse')
          shapes += `<ellipse cx='${sx}' cy='${sy}' rx='${sw / 2}' ry='${
            sh / 2
          }' fill='hsl(${fillHue} 70% ${55 - s}%)' opacity='${op}' />`;
        else if (shapeType === 'rect')
          shapes += `<rect x='${sx - sw / 2}' y='${
            sy - sh / 2
          }' width='${sw}' height='${sh}' rx='${20}' fill='hsl(${fillHue} 60% ${
            50 - s
          }%)' opacity='${op}' />`;
        else
          shapes += `<polygon points='${sx},${sy} ${sx + sw / 2},${sy - sh / 3} ${sx - sw / 2},${
            sy + sh / 3
          }' fill='hsl(${fillHue} 70% ${50 - s}%)' opacity='${op}' />`;
      }

      const title = escapeXml(String(prompt).slice(0, 60));
      const svg = `<?xml version='1.0' encoding='UTF-8'?>
        <svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
          <defs>
            <linearGradient id='g${i}' x1='0' x2='1'>
              <stop offset='0' stop-color='hsl(${hue} 75% 56%)' />
              <stop offset='1' stop-color='hsl(${(hue + 45) % 360} 65% 40%)' />
            </linearGradient>
            <filter id='noise${i}' x='-50%' y='-50%' width='200%' height='200%'>
              <feTurbulence baseFrequency='0.9' numOctaves='2' seed='${
                seed % 1000
              }' stitchTiles='stitch' />
              <feColorMatrix type='saturate' values='0' />
              <feBlend mode='overlay' />
            </filter>
            <clipPath id='clip${i}'><rect rx='16' ry='16' width='100%' height='100%'/></clipPath>
          </defs>
          <rect width='100%' height='100%' fill='url(#g${i})' />
          <g opacity='0.08' filter='url(#noise${i})'><rect width='100%' height='100%' fill='white' /></g>
          ${shapes}
          <g clip-path='url(#clip${i})'>
            <g font-family='Inter, Arial' text-anchor='middle' fill='white' opacity='0.98'>
              <text x='50%' y='48%' font-size='56' font-weight='700'>${title}</text>
              <text x='50%' y='56%' font-size='20' opacity='0.9'>${escapeXml(style)}</text>
            </g>
          </g>
        </svg>`;

      const thumbSvg = `<?xml version='1.0' encoding='UTF-8'?>
        <svg xmlns='http://www.w3.org/2000/svg' width='${tw}' height='${th}' viewBox='0 0 ${w} ${h}'>
          <defs>
            <linearGradient id='tg${i}' x1='0' x2='1'>
              <stop offset='0' stop-color='hsl(${hue} 75% 56%)' />
              <stop offset='1' stop-color='hsl(${(hue + 45) % 360} 65% 40%)' />
            </linearGradient>
          </defs>
          <rect width='100%' height='100%' fill='url(#tg${i})' />
          ${shapes}
          <g font-family='Inter, Arial' text-anchor='middle' fill='white' opacity='0.95'>
            <text x='50%' y='52%' font-size='20' font-weight='600'>${title}</text>
          </g>
        </svg>`;

      const src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
      const thumb = 'data:image/svg+xml;utf8,' + encodeURIComponent(thumbSvg);
      return { src, thumb };
    };

    const images = Array.from({ length: count }).map((_, i) => makeImagePair(i));
    return res.status(200).json({ images });
  } catch (err) {
    console.error('API /api/generate error', err);
    res.status(500).json({ error: err.message || String(err) });
  }
}

function hashCode(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return h;
}

function escapeXml(unsafe) {
  return String(unsafe).replace(/[&<>\"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
  });
}
