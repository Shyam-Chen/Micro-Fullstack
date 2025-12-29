import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import underPressure from '@fastify/under-pressure';
import fastify from 'fastify';
import httpProxy from '@fastify/http-proxy';

// import router from '~/plugins/router.ts';

export default () => {
  const app = fastify({
    logger: {
      transport: {
        target: '@fastify/one-line-logger',
      },
    },
  });

  app.register(cors, {
    origin: process.env.SITE_URL ? new RegExp(process.env.SITE_URL, 'gi') : '*',
  });
  app.register(helmet);
  app.register(underPressure, { exposeStatusRoute: '/api/healthz' });
  app.register(httpProxy, {
    upstream: `http://localhost:3001`,
    prefix: '/api/sub-alpha',
    http2: false,
  });
  app.register(httpProxy, {
    upstream: `http://localhost:3002`,
    prefix: '/api/sub-beta',
    http2: false,
  });
  app.register(httpProxy, {
    upstream: `http://localhost:3003`,
    prefix: '/api/sub-gamma',
    http2: false,
  });

  // app.register(router);

  return app;
};
