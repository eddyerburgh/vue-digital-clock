import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  plugins: [
    resolve(),
    vue({
      template: {
        // isProduction,
        compilerOptions: { preserveWhitespace: false }
      },
      css: true
    }),
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
      format: 'es',
      exports: 'default'
    },
  ]
}
