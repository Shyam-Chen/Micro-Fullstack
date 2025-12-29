import fs from 'node:fs';
import path from 'node:path';
import fastifyStatic from '@fastify/static';
import fastify from 'fastify';

const app = fastify({
  logger: {
    transport: {
      target: '@fastify/one-line-logger',
    },
  },
  ...(process.env.HTTPS === 'true'
    ? {
        http2: true,
        https: {
          key: fs.readFileSync(process.env.HTTPS_KEY),
          cert: fs.readFileSync(process.env.HTTPS_CERT),
        },
      }
    : {}),
});

app.register(fastifyStatic, {
  root: path.resolve(import.meta.dirname),
  prefix: process.env.BASE,
});

app.setNotFoundHandler((_, reply) => {
  reply.sendFile('index.html');
});

app.listen({
  host: process.env.HOST,
  port: Number(process.env.PORT),
});
