import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
  server: {
    port: 6062,
    cors: true,
  },
  plugins: [
    vue(),
    qiankun('bar', {
      useDevMode: true,
    }),
  ],
});
