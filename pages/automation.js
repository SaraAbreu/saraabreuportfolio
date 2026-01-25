import { useState } from 'react'
import Head from 'next/head'

export default function Automation(){
  const [logs, setLogs] = useState([])
  const [running, setRunning] = useState(false)

  async function runWorkflow(){
    setRunning(true)
    const res = await fetch('/api/automation', { method: 'POST' })
    const data = await res.json()
    setLogs(data.logs || [])
    setRunning(false)
  }

  return (
    <div className="min-h-screen p-8">
      <Head><title>Demo Automatización</title></Head>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Demo: Automatización (simulada)</h2>
        <p className="text-gray-600 mb-4">Simula un workflow con triggers, acciones y logs para mostrar cómo presentas soluciones de automatización.</p>

        <div className="mb-4">
          <button onClick={runWorkflow} disabled={running} className="px-4 py-2 bg-green-600 text-white rounded">
            {running? 'Ejecutando...' : 'Ejecutar workflow'}
          </button>
        </div>

        <div className="card">
          <h4 className="font-medium mb-2">Logs</h4>
          <div className="text-sm text-gray-700">
            {logs.length === 0 && <p className="text-gray-500">No hay logs aún.</p>}
            <ul>
              {logs.map((l,i)=> <li key={i} className="mb-1">{l}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
