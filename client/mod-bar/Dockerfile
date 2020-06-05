FROM node:14-alpine

ENV HOME /mod-bar

WORKDIR ${HOME}
ADD . $HOME

RUN yarn install --frozen-lockfile
