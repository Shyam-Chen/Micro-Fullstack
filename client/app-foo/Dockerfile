FROM node:14-alpine

ENV HOME /app-bar

WORKDIR ${HOME}
ADD . $HOME

RUN yarn install --frozen-lockfile
