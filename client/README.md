# Micro Frontends

### Table of Contents

- Local Development
- Previewing Locally
- Application Containerization
- Production Ready

---

## Concept

```sh
# entry
app-shell

# modules
mod-foo
mod-bar

# extends
app-components
```

## Steps

- [x] Create an Application Gateway (`app-shell`, created by `parcel`)
- [x] Create a basic pilet (`mod-foo`, created by `vue-cli`)
- [x] Create another basic pilet (`mod-bar`, created by `vue-cli`)
- [x] Create Web Components (`app-components`, created by `rollup`)

## Getting Started

### Quick Start

```sh
$ git clone https://github.com/Shyam-Chen/Micro-Fullstack
$ cd Micro-Fullstack

$ cd client
$ yarn install
$ yarn bootstrap

$ yarn serve
$ yarn build
```

Visit [http://localhost:8000/](http://localhost:8000/).

`app-shell` is listening on port 8000.<br>
`mod-foo` is listening on port 8001.<br>
`mod-bar` is listening on port 8002.

### Create your own basic pilet with Webpack using [Vue-Starter](https://github.com/Shyam-Chen/Vue-Starter)

```sh
$ git clone https://github.com/Shyam-Chen/Vue-Starter
$ cd Vue-Starter
$ yarn install
```

```diff
// env.js

- this.SITE_PORT = process.env.SITE_PORT || 8000;
+ this.SITE_PORT = process.env.SITE_PORT || 8003;
```

```diff
// webpack.config.js

  output: {
-   path: DISTRIBUTION_ROOT,
-   filename: prod ? '[name].[hash].js' : '[name].js',
-   chunkFilename: prod ? '[id].[chunkhash].js' : '[name].js',
+   library: `${pkg.name}-[name]`,
+   libraryTarget: 'umd',
+   jsonpFunction: `webpackJsonp_${pkg.name}`,
    publicPath: '/',
  },

  devServer: {
+   headers: {
+     'Access-Control-Allow-Origin': '*',
+   },
    contentBase: DISTRIBUTION_ROOT,
    historyApiFallback: true,
    host: env.HOST_NAME,
    hot: true,
    inline: true,
    overlay: true,
    port: env.SITE_PORT,
  },
```

```diff
// src/main.js

import App from './App';

+ if (window.__POWERED_BY_QIANKUN__) {
+   // eslint-disable-next-line no-undef
+   __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
+ }

Vue.use(VueCompositionApi);

sync(store, router);

- const vm = new Vue({
-   router,
-   store,
-   vuetify,
-   apolloProvider,
-   i18n,
-   render: h => h(App),
- });
-
- vm.$mount('#root');
-
- register();

+ let vm = null;
+
+ function render() {
+   vm = new Vue({
+     router,
+     store,
+     vuetify,
+     apolloProvider,
+     i18n,
+     render: h => h(App),
+   }).$mount('#root');
+
+   register();
+ }
+
+ if (!window.__POWERED_BY_QIANKUN__) {
+   render();
+ }
+
+ export async function bootstrap() {
+   console.log('vue app bootstraped');
+ }
+
+ export async function mount(props) {
+   console.log('props from main framework', props);
+   render();
+ }
+
+ export async function unmount() {
+   vm.$destroy();
+   vm = null;
+ }
```

```diff
// src/core/router.js

- base: process.env.APP_BASE,
+ base: window.__POWERED_BY_QIANKUN__ ? '/vue-starter' + process.env.APP_BASE : process.env.APP_BASE,
```

```diff
// app-shell/index.js

  registerMicroApps([
    {
      name: 'foo app',
      entry: process.env.ENTRY_FOO,
      container: '#app-root',
      activeRule: '/foo',
    },
    {
      name: 'bar app',
      entry: process.env.ENTRY_BAR,
      container: '#app-root',
      activeRule: '/bar',
    },
+   {
+     name: 'vue starter',
+     entry: '//localhost:8003',
+     container: '#app-root',
+     activeRule: '/vue-starter',
+   },
  ]);
```

## Local Development

```sh
$ sh run.sh --serve
```

## Previewing Locally

```sh
$ caddy run
```

## Application Containerization

docker + docker-compose

TODO: Push images to Docker Hub

```sh
$ docker login

$ docker-compose build
$ docker-compose push
```

## Production Ready

minikube + kantive

TODO: Pull images from Docker Hub

```sh
$ minikube start
$ kubectl apply --filename service.yml
$ kubectl get services
```
