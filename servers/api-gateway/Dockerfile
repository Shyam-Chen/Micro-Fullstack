FROM node:24 AS base

WORKDIR /usr/src/app
ADD . .

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm
RUN corepack use pnpm@10.x

RUN pnpm build

FROM node:24-slim

WORKDIR /usr/src/app

ARG SITE_ADDRESS
ENV SITE_ADDRESS=$SITE_ADDRESS

COPY --from=base /usr/src/app/dist /usr/src/app

ENV NODE_ENV=production

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm
RUN corepack use pnpm@10.x

USER node
CMD ["node", "/usr/src/app/server.js"]
