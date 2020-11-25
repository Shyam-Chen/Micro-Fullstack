import http from 'http';
import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';

import router from '~/core/router';

const app = new Koa();

app.use(cors());
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

const server = http.createServer(app.callback());

server.listen(3001, 'localhost', () => {
  console.log('🚀  App: Bootstrap Succeeded');
  console.log(`🚀  Host: http://${'localhost'}:${'3001'}`);
});

process.on('SIGINT', () => process.exit(0));
