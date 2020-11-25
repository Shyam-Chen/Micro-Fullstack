# Micro Backends

### Table of Contents

- [Getting Started](#getting-started)
- [Directory Structure](#directory-structure)
- [Application Testing](#application-testing)
- [Previewing Locally](#previewing-locally)
- [Application Containerization](#application-containerization)
- [Production Ready](#production-ready)

---

## Getting Started

```sh
$ git clone https://github.com/Shyam-Chen/Micro-Fullstack
$ cd Micro-Fullstack

$ cd server
$ yarn install
$ yarn bootstrap

$ yarn serve
```

`app-gateway` is listening on port 3000.<br>
`mod-koa` is listening on port 3001.<br>
`mod-express` is listening on port 3002.<br>
`mod-nest` is listening on port 3003.<br>
`mod-fastify` is listening on port 3004.

```sh
$ http :3000
# app-gateway

$ http :3000 'Host: localhost:3001'
# mod-koa

$ http :3000 'Host: localhost:3002'
# mod-express

$ http :3000 'Host: localhost:3003'
# mod-nest

$ http :3000 'Host: localhost:3004'
# mod-fastify
```

## Directory Structure

```sh
# core
app-gateway

# shared
app-assemblies

# modules
mod-koa
mod-express
mod-nest
mod-fastify
```

## Application Testing

jest

```sh
$ yarn test
```

## Previewing Locally

caddy

```sh
$ yarn build
$ caddy run -config ./app-gateway/Caddyfile
$ pm2 start ecosystem.config.js
```

## Application Containerization

docker

```sh
$
```

## Production Ready

knative

```sh
$
```
