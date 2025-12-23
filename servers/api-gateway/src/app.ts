import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import jwt from '@fastify/jwt';
import mongodb from '@fastify/mongodb';
import multipart from '@fastify/multipart';
import underPressure from '@fastify/under-pressure';
import fastify from 'fastify';

import router from '~/plugins/router.ts';

export default () => {
  const app = fastify({
    logger: {
      transport: {
        target: '@fastify/one-line-logger',
      },
    },
  });

  app.register(cors, { origin: process.env.SITE_URL ? new RegExp(process.env.SITE_URL, 'gi') : '*'});
  app.register(helmet);
  app.register(underPressure, { exposeStatusRoute: '/api/healthz' });
  app.register(jwt, { secret: import.meta.env.VITE_SECRET_KEY });
  app.register(mongodb, { url: import.meta.env.VITE_MONGODB_URL });
  app.register(multipart);

  app.register(router);

  return app;
};
