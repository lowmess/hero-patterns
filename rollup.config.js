import path from 'path'
import babel from '@rollup/plugin-babel'
import minify from 'rollup-plugin-babel-minify'

const pkg = require(path.resolve(process.cwd(), './package.json'))

const plugins = [babel()]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    minify({
      comments: false,
    })
  )
}

export default {
  input: './src/hero-patterns.js',
  plugins,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
}
