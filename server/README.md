# Micro Backends

### Table of Contents

- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
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

```sh
$ git clone https://github.com/Shyam-Chen/Micro-Fullstack
$ cd Micro-Fullstack

$ cd server
$ yarn install
$ yarn bootstrap

$ yarn serve
$ yarn build
```

`app-gateway` is listening on port 3000.<br>
`mod-koa` is listening on port 3001.<br>
`mod-express` is listening on port 3002.<br>
`mod-nest` is listening on port 3003.<br>
`mod-fastify` is listening on port 3004.

## Testing

jest

```sh
$ yarn lint
$ yarn test
```

## Previewing Locally

caddy

```sh
$
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
