FROM node:14-alpine

ENV HOME /mod-vue

WORKDIR ${HOME}
ADD . $HOME

RUN yarn install --frozen-lockfile
