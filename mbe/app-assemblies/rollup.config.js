import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import asc from 'rollup-plugin-asc';

const config = (file, mod) => ({
  input: path.join(__dirname, 'src', file),
  output: {
    file: path.join(__dirname, 'dist', file.substring(file.lastIndexOf('.'), 0) + '.js'),
    format: 'cjs',
    exports: 'auto',
  },
  external: ['fs', 'path', '@assemblyscript/loader', '@assemblyscript/loader/umd'],
  plugins: [
    resolve(),
    commonjs(),
    asc({
      output: path.join(__dirname, 'dist', mod),
    }),
  ],
  watch: {
    clearScreen: false,
  },
});

export default [
  { ...config('./libm/libm.ts', 'libm') },
  // ...
];
