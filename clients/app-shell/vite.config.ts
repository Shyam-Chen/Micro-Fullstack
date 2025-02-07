import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const port = 8000;

export default defineConfig({
  base: `http://localhost:${port}`,
  server: {
    port,
    cors: true,
    origin: `http://localhost:${port}`,
  },
  plugins: [vue()],
});
