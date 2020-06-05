const fastify = require('fastify');

const app = fastify();

app.get('/', async (request, reply) => {
  reply.type('application/json').code(200);
  return { text: 'bar' };
});

app.listen(3000, (err, address) => {
  if (err) throw err;
  fastify.log.info(`server listening on ${address}`);
});
