import http from 'http';
import chalk from 'chalk';

import app from './app';

const server = http.createServer(app);

server.listen(3001, '0.0.0.0', () => {
  console.log(chalk.hex('#009688')('🚀 App: Bootstrap Succeeded'));
  console.log(chalk.hex('#009688')('🚀 Local: http://0.0.0.0:3001'));

  // mongoose.connection.once('open', () => console.log(chalk.hex('#009688')('🚀 Mongo: Connection Succeeded')));
  // mongoose.connection.on('error', err => console.error(err));
});
