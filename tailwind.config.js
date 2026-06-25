module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream:      '#F8F6F1',
        sand:       '#E8E3D9',
        terracota:  '#C4602A',
        ink:        '#1A1A18',
        'ink-muted':'#6B6860',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono:  ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular']
      }
    }
  },
  plugins: []
};
