import fastify from 'fastify';

const app = fastify();

app.get('/', async (request, reply) => {
  return { data: 'mod-fastify' };
});

app.listen(3004, (err, address) => {
  if (err) throw err;
  console.log('🚀  App: Bootstrap Succeeded');
  console.log(`🚀  Host: ${address}`);
});
