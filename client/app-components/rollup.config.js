import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const cpnConfig = (file) => ({
  input: `src/${file}.svelte`,
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: `dist/${file}.js`,
  },
  plugins: [
    svelte({
      customElement: true,
      dev: !production,
    }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
});

export default [
  { ...cpnConfig('header/Header') },
  { ...cpnConfig('footer/Footer') },
];
