# Micro Frontends

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
app-shell

# shared
app-components

# modules
mod-vue
mod-react
mod-angular
mod-svelte
```

## Getting Started

```sh
$ git clone https://github.com/Shyam-Chen/Micro-Fullstack
$ cd Micro-Fullstack

$ cd client
$ yarn install
$ yarn bootstrap

$ yarn serve
$ yarn build
```

Visit [http://localhost:8000](http://localhost:8000).

`app-shell` is listening on port 8000.<br>
`mod-vue` is listening on port 8001.<br>
`mod-react` is listening on port 8002.<br>
`mod-angular` is listening on port 8003.<br>
`mod-svelte` is listening on port 8004.

## Testing

jest

```sh
$ yarn lint
$ yarn test
```

## Previewing Locally

caddy

```sh
# /Micro-Fullstack/client
$ caddy run
```

Visit [https://localhost:8000](https://localhost:8000).

## Application Containerization

docker

TODO: Push images to Docker Hub

```sh
$ docker login
```

```sh
$ yarn build
$ docker-compose build
$ docker-compose push
```

## Production Ready

knative

TODO: Pull images from Docker Hub

```sh
$
```
