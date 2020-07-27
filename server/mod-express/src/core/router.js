import { Router } from 'express';

import helloWorld from '~/hello-world';

const router = Router();

router.get('/', (req, res) => {
  res.send('mod-express');
});

router.use('/hello-world', helloWorld);

export default router;
