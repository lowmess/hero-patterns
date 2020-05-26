import path from 'path'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

const pkg = require(path.resolve(process.cwd(), './package.json'))

const plugins = [babel()]

if (process.env.NODE_ENV === 'production') {
  plugins.push(terser())
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
