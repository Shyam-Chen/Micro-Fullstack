import http from 'http';
import express from 'express';
import cors from 'cors';

import router from '~/core/router';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const server = http.Server(app);

server.listen(3002, 'localhost', () => {
  console.log('🚀  App: Bootstrap Succeeded');
  console.log(`🚀  Host: http://${'localhost'}:${'3002'}`);
});
