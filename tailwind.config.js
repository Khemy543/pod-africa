module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#0F703A",
        "primary-yellow": "#FAA32B",
        "primary-yellow-light": "rgba(250, 163, 43, 0.09)"
      },
      fontSize: {
        'xm' : ['0.5625rem', '1.125rem'],
        '3xl': ['1.875rem', '3.5rem']
      },
      fontFamily: {
        'source-sans': ['Source Sans 3', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: []
}
