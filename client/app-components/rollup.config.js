import path from 'path';
import svelte from 'rollup-plugin-svelte';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const cpnConfig = (file) => ({
  input: `src/${file}.svelte`,
  output: {
    sourcemap: true,
    format: 'esm',
    name: 'app',
    file: `dist/${file}.js`,
  },
  plugins: [
    svelte({
      customElement: true,
      dev: !production,
    }),
    getBabelOutputPlugin({
      configFile: path.resolve(__dirname, 'babel.config.js'),
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
  // { ...cpnConfig('') },
];
