import http from 'http';

import apolloServer from '~/api/core/graphql';

export const server = http.Server(app);

apolloServer.applyMiddleware({ app, path: '/graphql' });
apolloServer.installSubscriptionHandlers(server);

server.listen(Number(PORT), HOST, () => {
  console.log(chalk.hex('#009688')(' [*] App: Bootstrap Succeeded.'));
  console.log(chalk.hex('#009688')(` [*] Host: http://${HOST}:${PORT}/.`));
});
