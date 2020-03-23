# Front-end

## Steps

- [x] Create an Application Shell (`app-shell`, created by `parcel`)
  - [x] Vue render
  - [ ] React render
  - [ ] Angular render
  - [ ] Svelte render
- [x] Create a basic pilet (`app-foo`, created by `vue-cli`)
- [x] Create another basic pilet (`app-bar`, created by `vue-cli`)
- [ ] Create your own basic pilet
  - [x] `vue`, created by `vue-cli`
  - [ ] `react`, created by `create-react-app`
  - [ ] `angular`, created by `angular-cli`
  - [ ] `svelte`, created by `parcel` and `parcel-plugin-svelte`
  - [ ] `vue-starter`, created by `webpack`
  - [ ] `react-starter`, created by `webpack`
  - [ ] `angular-starter`, created by `webpack`
  - [ ] `svelte-starter`, created by `webpack`

## Getting Started

### Quick Start

```sh
$ git clone https://github.com/Shyam-Chen/Micro-Fullstack
$ cd Micro-Fullstack

$ cd client
$ yarn install

$ yarn install:all
$ yarn serve:all
```

Visit [http://localhost:8000/](http://localhost:8000/).

`app-shell` is listening on port 8000.<br>
`app-foo` is listening on port 8001.<br>
`app-bar` is listening on port 8002.

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

import register from '~/core/register';

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
-   render: handle => handle('router-view'),
- });

- vm.$mount('#root');

- register();

+ let vm = null;

+ function render() {
+   vm = new Vue({
+     router,
+     store,
+     vuetify,
+     apolloProvider,
+     i18n,
+     render: handle => handle('router-view'),
+   });

+   vm.$mount('#root');

+   register();
+ }

+ if (!window.__POWERED_BY_QIANKUN__) {
+   render();
+ }

+ export async function bootstrap() {
+   console.log('vue app bootstraped');
+ }

+ export async function mount(props) {
+   console.log('props from main framework', props);
+   render();
+ }

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
