module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        preblack: ['preblack'],
        prebold: ['prebold'],
        preextrabold: ['preextrabold'],
        preextralight: ['preextralight'],
        prelight: ['prelight'],
        premedium: ['premedium'],
        preregular: ['preregular'],
        presemibold: ['presemibold'],
        prethin: ['prethin'],
      },
    },
  },
  plugins: [require('daisyui')],
}
