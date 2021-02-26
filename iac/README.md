# Infrastructure as Code

- git `git --version`
- node `node -v`
- pnpm `pnpm -v`
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

```sh
$ pulumi config set isMinikube true
$ pulumi up
```
