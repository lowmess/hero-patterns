import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import babili from 'rollup-plugin-babili'
import fs from 'fs-extra'

// delete 'dist', so that copying the index.html works
if (fs.existsSync('dist')) fs.emptyDirSync('dist')
// create 'dist', should always fire
if (!fs.existsSync('dist')) fs.mkdirSync('dist')
// copy index.html to 'dist'
fs.copySync('./site/index.html', './dist/index.html')

let plugs = [
  resolve({
    main: true,
    jsnext: true,
    preferBuiltins: true
  }),
  commonjs(),
  json(),
  babel({
    exclude: 'node_modules/**'
  })
]

if (process.env.NODE_ENV === 'production') {
  plugs.push(
    babili({
      comments: false
    })
  )
}

export default {
  entry: './site/main.js',
  dest: './dist/bundle.js',
  format: 'es',
  plugins: plugs
}
