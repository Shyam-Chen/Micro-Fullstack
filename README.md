# Micro Fullstack

:maple_leaf: **ECMAScript Microservices Development**: Build, test, deploy, and scale microservices in ECMAScript.

Here's how to make microservices development quick and easy:

- Create microservice applications using [JavaScript][javascript] and [TypeScript][typescript]
- Register multiple single-page applications on a single page with [Single SPA][single spa] and [QianKun][qiankun]
- Craft reusable components with the [Web Components][web components] specifications using [Svelte][svelte]
- Build applications with popular front-end frameworks like [Vue][vue], [React][react], [Angular][angular], and [Svelte][svelte]
- Design a service gateway and service registry with the [Caddy][caddy] API gateway
- Write, load, and run portable binary code with [WebAssembly][webassembly] using [AssemblyScript][assemblyscript]
- Build applications with popular back-end frameworks like [Koa][koa], [Express][express], [Nest][nest], and [Fastify][fastify]
- Use a test-driven development approach for microservices with [Jest][jest]
- Static file serving, reverse proxy, and automatic HTTPS with [Caddy][caddy]
- Containerize microservice-based applications with [Docker][docker]
- Deploy, serve, and scale container-based applications with [Knative][knative]

[javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[typescript]: https://www.typescriptlang.org/
[single spa]: https://single-spa.js.org/
[qiankun]: https://qiankun.umijs.org/
[web components]: https://www.webcomponents.org/
[svelte]: https://svelte.dev/
[vue]: https://vuejs.org/
[react]: https://reactjs.org/
[angular]: https://angular.io/
[caddy]: https://caddyserver.com/
[webassembly]: https://webassembly.org/
[assemblyscript]: https://www.assemblyscript.org/
[koa]: https://koajs.com/
[express]: https://expressjs.com/
[nest]: https://nestjs.com/
[fastify]: https://www.fastify.io/
[jest]: https://jestjs.io/
[docker]: https://www.docker.com/
[knative]: https://knative.dev/

## Micro Frontends

See [mfe folder](./mfe).

## Micro Backends

See [mbe folder](./mbe).

## End-to-End Testing

See [e2e folder](./e2e).

## Infrastructure as Code

See [iac folder](./iac).

## Environment Settings

- git `git --version`
- node `node -v`
- yarn `yarn -v`
- pm2 `pm2 -v`
- caddy `caddy version`
- docker `docker -v`
- docker-compose `docker-compose -v`
- minikube `minikube version`
- kubectl `kubectl version --client --short`
- httpie `http --version`
- watch `watch -v`

```sh
$ minikube start
$ kubectl version --short
```

```sh
# Install Knative Serving
$ kubectl apply -f https://github.com/knative/serving/releases/download/v0.17.0/serving-crds.yaml
$ kubectl apply -f https://github.com/knative/serving/releases/download/v0.17.0/serving-core.yaml
```

```sh
# Install Kourier
$ kubectl apply -f https://github.com/knative/net-kourier/releases/download/v0.17.0/kourier.yaml
```

```sh
# Configure Knative Serving
$ kubectl patch configmap/config-network \
    -n knative-serving \
    --type merge \
    -p '{"data":{"ingress.class":"kourier.ingress.networking.knative.dev"}}'
```

```sh
# Knative Serving pods
$ watch "kubectl get pods -n knative-serving"
```

## Credits

- Group 1:
  - [Vue-Starter](https://github.com/Shyam-Chen/Vue-Starter)
  - [React-Starter](https://github.com/Shyam-Chen/React-Starter)
  - [Angular-Starter](https://github.com/Shyam-Chen/Angular-Starter)
  - [Svelte-Starter](https://github.com/Shyam-Chen/Svelte-Starter)
- Group 2:
  - [Koa-Starter](https://github.com/Shyam-Chen/Koa-Starter)
  - [Express-Starter](https://github.com/Shyam-Chen/Express-Starter)
  - [Nest-Starter](https://github.com/Shyam-Chen/Nest-Starter)
  - [Fastify-Starter](https://github.com/Shyam-Chen/Fastify-Starter)
- Group 3:
  - [Component-Starter](https://github.com/Shyam-Chen/Component-Starter)
  - [Assembly-Starter](https://github.com/Shyam-Chen/Assembly-Starter)
  - [Playwright-Starter](https://github.com/Shyam-Chen/Playwright-Starter)
  - [Pulumi-Starter](https://github.com/Shyam-Chen/Pulumi-Starter)
