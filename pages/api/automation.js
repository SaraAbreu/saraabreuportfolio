export default function handler(req, res){
  if (req.method !== 'POST') return res.status(405).end()

  const now = () => new Date().toLocaleTimeString()
  const logs = [
    `${now()} — Trigger: webhook received`,
    `${now()} — Acción: transformar payload`,
    `${now()} — Acción: llamar a endpoint externo (simulado)`,
    `${now()} — Resultado: éxito — 3 items procesados`
  ]
  // Simular latencia
  setTimeout(()=> res.status(200).json({ logs }), 700)
}
