const { chromium } = require('playwright')
const fs = require('fs')

function parseArg(name, def) {
  const prefix = `--${name}=`
  const arg = process.argv.find(a => a.startsWith(prefix))
  if (!arg) return def
  return arg.slice(prefix.length)
}

const serifArg = parseArg('serif', 'playfair') // playfair | merri
const paletteArg = parseArg('palette', 'warm') // warm | cool
const layoutArg = parseArg('layout', 'full') // full | simplified
const durationArg = parseArg('duration', '6000')
const outArg = parseArg('out', 'interaction_variant.mp4')

;(async () => {
  const browser = await chromium.launch()
  const context = await browser.newContext({ recordVideo: { dir: '.', size: { width: 1280, height: 720 } } })
  const page = await context.newPage()
  try {
    // set theme preferences in localStorage before navigation
    await page.evaluateOnNewDocument((s,p,l)=>{
      try{
        localStorage.setItem('abreu:serif', s)
        localStorage.setItem('abreu:palette', p)
        localStorage.setItem('abreu:layout', l)
      }catch(e){}
    }, serifArg, paletteArg, layoutArg)

    // try multiple ports (3000..3004)
    const ports = [3000,3001,3002,3003,3004]
    let opened = false
    for (const p of ports) {
      try {
        await page.goto(`http://localhost:${p}`, { waitUntil: 'networkidle', timeout: 8000 })
        opened = true; break
      } catch(e) {
        // try next
      }
    }
    if (!opened) {
      console.warn('Could not open local dev server on ports 3000-3004')
    }

    // small interaction sequence
    await page.waitForTimeout(400)
    await page.keyboard.press('Tab')
    await page.waitForTimeout(800)
    await page.waitForTimeout(Number(durationArg))
  } finally {
    const video = await page.video().path()
    await browser.close()
    // wait for recorded file to be finalized
    if (video && fs.existsSync(video)) {
      const maxWait = 5000
      const start = Date.now()
      while (Date.now() - start < maxWait) {
        try {
          const st = fs.statSync(video)
          if (st.size && st.size > 0) break
        } catch (e) {}
        await new Promise(r => setTimeout(r, 250))
      }
      const dest = outArg
      try {
        fs.renameSync(video, dest)
        console.log('Saved', dest)
      } catch (err) {
        console.warn('Rename failed, attempting copy...', err.message)
        let attempts = 0
        let ok = false
        while (attempts < 6 && !ok) {
          try {
            fs.copyFileSync(video, dest)
            ok = true
          } catch (e) {
            attempts++
            await new Promise(r => setTimeout(r, 200))
          }
        }
        if (ok) {
          try { fs.unlinkSync(video) } catch (e) {}
          console.log('Saved', dest)
        } else {
          console.log('Failed to save video after retries. Temp file at', video)
        }
      }
    } else {
      console.log('No video generated')
    }
  }
})()

