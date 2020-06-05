FROM node:14-alpine

ENV HOME /mod-foo

WORKDIR ${HOME}
ADD . $HOME

RUN yarn install --frozen-lockfile
