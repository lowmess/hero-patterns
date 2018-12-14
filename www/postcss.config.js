module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    require('css-mqpacker'),
  ],
  map: {
    inline: false,
  },
}
