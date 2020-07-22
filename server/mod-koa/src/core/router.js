import Router from '@koa/router';

import hello from '~/hello';

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'app-root';
});

router.use('/hello', hello.routes(), hello.allowedMethods());

export default router;
