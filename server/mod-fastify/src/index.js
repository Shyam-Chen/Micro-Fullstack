import Fastify from 'fastify';
import cors from 'fastify-cors';

import router from '~/core/router';

const fastify = Fastify();

fastify.register(cors);

fastify.register(router, { prefix: '/' });

fastify.listen(3004, 'localhost', (err, address) => {
  if (err) throw err;
  console.log('🚀  App: Bootstrap Succeeded');
  console.log(`🚀  Host: ${address}`);
});
