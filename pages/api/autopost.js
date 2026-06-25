export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { topic, platform, tone } = req.body;

  if (!topic) return res.status(400).json({ error: 'Falta el tema' });

  const platformInstructions = {
    instagram: 'Instagram (máx. 2200 caracteres, usa emojis con moderación, formato visual y cercano)',
    linkedin: 'LinkedIn (tono profesional, sin emojis excesivos, párrafos cortos, orientado a negocio)',
    twitter: 'Twitter/X (máx. 280 caracteres, directo, impactante, con 2-3 hashtags máximo)',
  };

  const toneMap = {
    profesional: 'profesional y directo',
    casual: 'cercano y conversacional',
    inspiracional: 'motivador e inspiracional',
  };

  const prompt = `Eres un experto en marketing digital y copywriting para redes sociales.

Genera un post optimizado para ${platformInstructions[platform] || platformInstructions.instagram}.

Tema o negocio: "${topic}"
Tono: ${toneMap[tone] || toneMap.profesional}

Devuelve ÚNICAMENTE un JSON con esta estructura exacta (sin markdown, sin explicaciones):
{
  "caption": "el texto del post listo para publicar",
  "hashtags": ["hashtag1", "hashtag2", "hashtag3", "hashtag4", "hashtag5"],
  "hook": "primera frase gancho para captar atención (max 10 palabras)",
  "tip": "un consejo breve sobre cuándo o cómo publicar esto"
}`;

  try {
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'grok-3-mini',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.8,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('xAI error:', err);
      return res.status(500).json({ error: 'Error al llamar a Grok' });
    }

    const data = await response.json();
    const raw = data.choices?.[0]?.message?.content || '';

    // Limpiar posible markdown ```json ... ```
    const clean = raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    let result;
    try {
      result = JSON.parse(clean);
    } catch {
      return res.status(500).json({ error: 'Respuesta inesperada del modelo', raw });
    }

    return res.status(200).json(result);
  } catch (err) {
    console.error('autopost error:', err);
    return res.status(500).json({ error: err.message });
  }
}
