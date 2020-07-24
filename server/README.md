# Micro Backends

### Table of Contents

- Directory Structure
- Getting Started
- Local Development
- Previewing Locally
- Application Containerization
- Production Ready

---

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

## Getting Started

1. Start API Gateway

```sh
$ cd app-gateway
$ kong start
```

2. Local

```sh
$ git clone https://github.com/Shyam-Chen/Micro-Fullstack
$ cd Micro-Fullstack

$ cd server
$ yarn install
$ yarn bootstrap

$ yarn serve
$ yarn build
```

3. Configure `mod-koa` service

```sh
$ cd mod-koa
$ yarn install
$ yarn serve
```

```sh
$ http POST :8001/services name=mod-koa url=http://localhost:3001
$ http POST :8001/services/mod-koa/routes hosts:='["localhost:3001"]'

$ http :8000 'Host: localhost:3001'
# mod-koa
```

`app-gateway` is listening on port 8000.<br>
`mod-koa` is listening on port 3001.<br>
`mod-express` is listening on port 3002.<br>
`mod-nest` is listening on port 3003.<br>
`mod-fastify` is listening on port 3004.

## Previewing Locally

kong + pm2

```sh
$ pm2
```

## Application Containerization

docker + docker-compose

```sh
$
```

## Production Ready

minikube + kantive

```sh
$
```
