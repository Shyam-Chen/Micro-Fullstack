FROM keymetrics/pm2:14-alpine

COPY /dist .
COPY package.json .
COPY ecosystem.config.js .

RUN yarn install --production

EXPOSE 3001

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
