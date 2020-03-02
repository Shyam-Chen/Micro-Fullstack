# Micro Fullstack

## Steps

1. [ ] Create an Application Shell (`app-shell`)
2. [ ] Create a basic pilet (`app-foo`)
3. [ ] Create another basic pilet (`app-bar`)

## Front-end

### Vue

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

- entry: ['./main.js'],
+ entry: './main.js',

  output: {
-   path: DISTRIBUTION_ROOT,
-   filename: prod ? '[name].[hash].js' : '[name].js',
-   chunkFilename: prod ? '[id].[chunkhash].js' : '[name].js',
-   publicPath: '/',
+   library: `${pkg.name}-[name]`,
+   libraryTarget: 'umd',
+   jsonpFunction: `webpackJsonp_${pkg.name}`,
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

+ let instance = null;

+ function render() {
+   instance = new Vue({
+     router,
+     store,
+     vuetify,
+     apolloProvider,
+     i18n,
+     render: handle => handle('router-view'),
+   }).$mount('#root');

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
+   instance.$destroy();
+   instance = null;
+ }
```

```diff
// src/core/router.js

- base: process.env.APP_BASE,
+ base: window.__POWERED_BY_QIANKUN__ ? '/vue-starter' + process.env.APP_BASE : process.env.APP_BASE,
```
