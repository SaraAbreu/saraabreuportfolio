export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { prompt = 'Artwork', style = 'default' } = req.body || {}

  // Crear 4 imágenes SVG simples como data URLs para simular generación IA
  const makeSVG = (i) => {
    const hue = Math.abs(hashCode(prompt + style + i)) % 360
    const svg = `<?xml version='1.0' encoding='UTF-8'?>
      <svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
        <defs>
          <linearGradient id='g' x1='0' x2='1'>
            <stop offset='0' stop-color='hsl(${hue} 80% 60%)' />
            <stop offset='1' stop-color='hsl(${(hue+60)%360} 70% 45%)' />
          </linearGradient>
        </defs>
        <rect width='100%' height='100%' fill='url(#g)' />
        <g font-family='Arial' fill='white' font-size='32' opacity='0.95'>
          <text x='40' y='80'>${escapeXml(prompt)}</text>
          <text x='40' y='120' font-size='20'>Style: ${escapeXml(style)}</text>
        </g>
      </svg>`
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg)
  }

  const images = Array.from({length:4}).map((_,i)=> makeSVG(i))
  res.status(200).json({ images })
}

function hashCode(s){
  let h = 0; for (let i=0;i<s.length;i++) h = ((h<<5)-h)+s.charCodeAt(i)|0; return h
}

function escapeXml(unsafe){
  return String(unsafe).replace(/[&<>\"]/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]
  })
}
