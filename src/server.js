import http from 'http';
import chalk from 'chalk';

import apolloServer from '~/core/graphql';
import mongoose from '~/core/mongoose';
import sequelize from '~/core/sequelize';
import redis from '~/core/redis';

import { PORT, HOST } from './env';
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

export default server;
