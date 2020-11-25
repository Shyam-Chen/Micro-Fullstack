import helloWorld from '~/hello-world';

export default (fastify, opts, next) => {
  fastify.get('/', async () => 'mod-fastify');
  fastify.register(helloWorld, { prefix: '/hello-world' });

  next();
};
