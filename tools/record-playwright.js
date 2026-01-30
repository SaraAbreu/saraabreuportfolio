const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ recordVideo: { dir: '.', size: { width: 1280, height: 720 } } });
  const page = await context.newPage();
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' }).catch(()=>{});
    // fallback to 3001 if 3000 not available
    if ((await page.title()) === '') {
      await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
    }
    // wait and interact slightly
    await page.waitForTimeout(600);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(1200);
    // capture 6s then close
    await page.waitForTimeout(6000);
  } finally {
    const video = await page.video().path();
    await browser.close();
    // wait for the recorded file to be finalized (size > 0)
    const maxWait = 5000
    const start = Date.now()
    while (Date.now() - start < maxWait) {
      try {
        const st = fs.statSync(video)
        if (st.size && st.size > 0) break
      } catch (e) {}
      await new Promise(r => setTimeout(r, 250))
    }
    // try to rename; if file locked, fallback to copy with retries
    if (video && fs.existsSync(video)) {
      const dest = 'interaction.mp4'
      try {
        fs.renameSync(video, dest)
        console.log('Saved', dest)
      } catch (err) {
        console.warn('Rename failed, attempting copy...', err.message)
        // retry copy a few times
        let attempts = 0
        let ok = false
        while (attempts < 6 && !ok) {
          try {
            fs.copyFileSync(video, dest)
            ok = true
          } catch (e) {
            attempts++
            Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 200)
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
      console.log('No video generated');
    }
  }
})();
