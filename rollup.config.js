import path from 'path'
import babel from 'rollup-plugin-babel'
import minify from 'rollup-plugin-babel-minify'

const pkg = require(path.resolve(process.cwd(), './package.json'))

const plugs = [babel()]

if (process.env.NODE_ENV === 'production') {
  plugs.push(
    minify({
      comments: false,
    })
  )
}

const config = {
  entry: './src/hero-patterns.js',
  sourceMap: true,
  plugins: plugs,
  targets: [{ dest: pkg.main, format: 'cjs' }, { dest: pkg.module, format: 'es' }],
}

export default config
