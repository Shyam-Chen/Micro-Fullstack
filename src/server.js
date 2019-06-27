import http from 'http';
import chalk from 'chalk';

import apolloServer from './api/core/graphql';
import mongoose from './api/core/mongoose';
import redis from './api/core/redis';

import app from './api/app';

const server = http.Server(app);

apolloServer.installSubscriptionHandlers(server);

server.listen(Number(PORT), HOST, () => {
  console.log(chalk.hex('#009688')(' [*] App: Bootstrap Succeeded.'));
  console.log(chalk.hex('#009688')(` [*] Host: http://${HOST}:${PORT}/.`));

  mongoose.connection.once('open', () => console.log(chalk.hex('#009688')(' [*] Mongo: Connection Succeeded.')));
  mongoose.connection.on('error', err => console.error(err));

  sequelize.authenticate()
    .then(() => console.log(chalk.hex('#009688')(' [*] Postgres: Connection Succeeded.')))
    .catch(err => console.error(err));

  redis.on('connect', () => console.log(chalk.hex('#009688')(' [*] Redis: Connection Succeeded.')));
  redis.on('error', err => console.error(err));
});
