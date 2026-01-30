module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0b0b0d',
        'brand-gray-900': '#0f1724',
        'brand-gray-700': '#374151',
        'brand-gray-400': '#9CA3AF',
        'brand-white': '#ffffff',
        'accent-warm': '#D4AF37',
        'accent-cool': '#06b6d4'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular']
      }
    }
  },
  plugins: []
}
