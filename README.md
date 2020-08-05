# Micro Fullstack

:maple_leaf: ECMAScript Microservices Development: Build, test, deploy, and scale microservices in ECMAScript.

Here's how to make microservices development quick and easy:

- Create microservice applications using JavaScript and TypeScript
- Register multiple single-page applications on a single page with Single SPA
- Craft reusable components with the Web Components specifications
- Build applications with the best front-end frameworks, such as Vue, React, Angular and Svelte
- Design a service gateway and service registry with the Caddy API gateway
- Write, load and run portable binary code with AssemblyScript and WebAssembly
- Build applications with the best back-end frameworks, such as Koa, Express, Nest and Fastify
- Use a effective and pragmatic test-driven development approach with Jest
- Containerize microservice-based applications with Docker and Docker Compose
- Deploy, serve, and scale applications with the Knative Serving module

## Micro Frontends

See [client folder](./client).

## Micro Backends

See [server folder](./server).

## Environment Settings

- git `git --version`
- node `node -v`
- yarn `yarn -v`
- caddy `caddy version`
- docker `docker -v`
- docker-compose `docker-compose -v`
- minikube `minikube version`
- kubectl `kubectl version --client --short`
- watch `watch -v`

```sh
$ minikube start
$ kubectl version --short
```

```sh
# Install Custom Resource Definitions
$ kubectl apply --selector knative.dev/crd-install=true \
    --filename https://github.com/knative/serving/releases/download/v0.16.0/serving-crds.yaml

$ kubectl api-resources --api-group='serving.knative.dev'
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
# Install Kourier
$ kubectl apply --filename https://github.com/knative/net-kourier/releases/download/v0.16.0/kourier.yaml

# Kourier pods
$ watch "kubectl get pods -n kourier-system"
```

```sh
# Configure Knative serving to use Kourier as the ingress
$ kubectl patch configmap/config-network \
    -n knative-serving \
    --type merge \
    -p '{"data":{"ingress.class":"kourier.ingress.networking.knative.dev"}}'
```

```sh
# Configure Kubernetes namespace
$ kubectl create namespace micro
```
