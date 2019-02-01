import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  plugins: [
    commonjs(),
    resolve(),
    vue(),
    buble()
  ],
  output: [
    {
      file: 'dist/cjs/Clock.js',
      format: 'cjs',
      exports: 'default'
    },
    {
      file: 'dist/es/Clock.js',
      format: 'es'
    },
  ]
}
