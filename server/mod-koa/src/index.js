import http from 'http';
import Koa from 'koa';
import cors from '@koa/cors';

const app = new Koa();

app.use(cors());

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

const server = http.createServer(app.callback());

server.listen(3001, 'localhost', () => {
  console.log('🚀  App: Bootstrap Succeeded.');
  console.log(`🚀  Host: http://${'localhost'}:${'3001'}/.`);
});
