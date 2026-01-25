import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles = []
    const PARTICLE_COUNT = Math.max(20, Math.floor((width * height) / 80000))
    const mouse = { x: width / 2, y: height / 2 }

    function rand(min, max) { return Math.random() * (max - min) + min }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: rand(-0.3, 0.3),
        vy: rand(-0.3, 0.3),
        r: rand(1, 3),
        hue: rand(180, 260)
      })
    }

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left
      mouse.y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove)

    let raf = null

    function draw() {
      ctx.clearRect(0, 0, width, height)

      // soft radial gradient background
      const g = ctx.createLinearGradient(0, 0, width, height)
      g.addColorStop(0, 'rgba(12,18,28,0.95)')
      g.addColorStop(1, 'rgba(28,18,42,0.95)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, width, height)

      // draw particles
      for (let p of particles) {
        // simple attraction to mouse
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.max(20, Math.hypot(dx, dy))
        const force = 40 / (dist * dist)
        p.vx += force * dx + rand(-0.01, 0.01)
        p.vy += force * dy + rand(-0.01, 0.01)

        p.x += p.vx
        p.y += p.vy

        // friction
        p.vx *= 0.92
        p.vy *= 0.92

        // wrap
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10

        ctx.beginPath()
        ctx.fillStyle = `hsla(${p.hue},70%,60%,0.9)`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < 120) {
            ctx.strokeStyle = `rgba(120,130,200,${(120 - d) / 300})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  )
}
