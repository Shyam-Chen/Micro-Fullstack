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
- Deploy, serve, and scale container-based applications with [Knative][knative] on [OpenShift][openshift]

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
[openshift]: https://www.openshift.com/

## Micro Frontends

See [client folder](./client).

## Micro Backends

See [server folder](./server).

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
- helm `helm version --short`
- httpie `http --version`
- watch `watch -v`

```sh
$ minikube start
$ kubectl version --short
```

```sh
# Install Custom Resource Definitions
$ kubectl apply --selector knative.dev/crd-install=true \
    --filename https://github.com/knative/serving/releases/download/v0.16.0/serving-crds.yaml

$ kubectl api-resources --api-group=serving.knative.dev
# NAME             SHORTNAMES      APIGROUP              NAMESPACED   KIND
# configurations   config,cfg      serving.knative.dev   true         Configuration
# revisions        rev             serving.knative.dev   true         Revision
# routes           rt              serving.knative.dev   true         Route
# services         kservice,ksvc   serving.knative.dev   true         Service
```

```sh
# Install Knative Serving
$ kubectl apply --filename https://github.com/knative/serving/releases/download/v0.16.0/serving-core.yaml

# Knative Serving pods
$ watch "kubectl get pods -n knative-serving"
```

```sh
# Install Istio

# ...

$ kubectl api-resources --api-group=networking.istio.io

$ kubectl api-resources --api-group=config.istio.io

$ kubectl api-resources --api-group=authentication.istio.io

$ kubectl api-resources --api-group=rbac.istio.io
```

```sh
# Configure Kubernetes namespace
$ kubectl create namespace micro
```
