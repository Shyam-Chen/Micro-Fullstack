FROM node:14-alpine

ENV HOME /app-shell

WORKDIR ${HOME}
ADD . $HOME

RUN yarn install --frozen-lockfile
