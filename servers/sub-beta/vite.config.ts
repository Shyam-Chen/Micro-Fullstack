import { resolve } from 'node:path';
import envify from 'process-envify';
import { defineConfig } from 'vite';
import fastify from 'vite-plugin-fastify';
import fastifyRoutes from 'vite-plugin-fastify-routes';

export default defineConfig({
  define: envify({
    NODE_ENV: process.env.NODE_ENV || 'development',

    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3002,

    SITE_URL: process.env.SITE_URL || 'http://localhost:5173',
  }),
  plugins: [
    fastify({
      serverPath: './src/main.ts',
    }),
    fastifyRoutes(),
  ],
  resolve: {
    alias: {
      '~': resolve(import.meta.dirname, 'src'),
    },
  },
});
