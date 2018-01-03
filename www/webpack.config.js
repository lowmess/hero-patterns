const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path')

module.exports = {
  context: __dirname,
  entry: './src/main.js',
  devtool: 'cheap-eval-source-maps',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.html'],
    alias: {
      'hero-patterns': path.resolve(__dirname, '../src/hero-patterns.js'),
      'package.json': path.resolve(__dirname, '../package.json'),
      colors: path.resolve(__dirname, 'public/colors.json'),
    },
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new ExtractTextPlugin("main.css")
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{ loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader'],
        })
      },
    ],
  },
}
