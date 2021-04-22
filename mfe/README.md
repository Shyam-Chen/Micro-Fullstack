# Micro Frontends

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

$ cd client
$ yarn install
$ yarn bootstrap

$ yarn serve
```

Visit [http://localhost:8000](http://localhost:8000).

`app-shell` is listening on port 8000.<br>
`mod-vue` is listening on port 8001.<br>
`mod-react` is listening on port 8002.<br>
`mod-angular` is listening on port 8003.<br>
`mod-svelte` is listening on port 8004.

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

## Application Testing

jest

```sh
$ yarn test
```

## Previewing Locally

caddy

```sh
# /Micro-Fullstack/client
$ yarn build
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
$ minikube start
$
```

## Domain name

For example:

- `example.com` (`app-shell`, `setDefaultMountApp('/app')`)
  - `example.com/app` (`mod-vue`, App)
  - `example.com/auth` (`mod-react`, Auth)
  - `example.com/account` (`mod-angular`, Account)
  - `example.com/product` (`mod-svelte`, Product)
- `app.example.com` (`mod-vue`, App)
- `auth.example.com` (`mod-react`, Auth)
- `account.example.com` (`mod-angular`, Account)
- `product.example.com` (`mod-svelte`, Product)
- (`app-components`, Common)

TODO: Without `setDefaultMountApp('/app')`:

- `example.com` (`app-shell`, Render in Vue)
  - `example.com/auth` (`mod-vue`, Auth)
  - `example.com/account` (`mod-react`, Account)
  - `example.com/product` (`mod-angular`, Product)
  - `example.com/payment` (`mod-svelte`, Payment)
- `auth.example.com` (`mod-vue`, Auth)
- `account.example.com` (`mod-react`, Account)
- `product.example.com` (`mod-angular`, Product)
- `payment.example.com` (`mod-svelte`, Payment)
- (`app-components`, Common)
