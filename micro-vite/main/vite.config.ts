import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  server: {
    port: 6060,
    cors: true,
  },
  plugins: [
    vue(),
  ],
});
