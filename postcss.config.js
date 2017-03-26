module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('postcss-custom-media'),
    require('autoprefixer'),
    require('cssnano'),
    require('css-mqpacker')
  ],
  map: {
    inline: false
  }
}
