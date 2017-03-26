import alias from 'rollup-plugin-alias'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import babili from 'rollup-plugin-babili'
import fs from 'fs'

if (!fs.existsSync('dist')) {
  fs.mkdir('dist')
  fs.createReadStream('./site/index.html').pipe(fs.createWriteStream('./dist/index.html'))
}

let plugs = [
  alias({
    'vue': 'node_modules/vue/dist/vue.esm.js'
  }),
  resolve({
    main: true,
    jsnext: true,
    preferBuiltins: true
  }),
  commonjs(),
  babel({
    exclude: 'node_modules/**'
  })
]

if (process.env.NODE_ENV === 'production') {
  plugs.push(
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babili({
      comments: false
    })
  )
} else {
  plugs.push(
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  )
}

export default {
  entry: './site/main.js',
  dest: './dist/bundle.js',
  format: 'es',
  plugins: plugs
}
