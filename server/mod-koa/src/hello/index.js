import Router from '@koa/router';

import assemblies from '../../../app-assemblies';

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = { data: 'Hello, World!' };
});

router.get('/add', async (ctx) => {
  ctx.body = { data: assemblies.add(1, 2) };
});

export default router;
