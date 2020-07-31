import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import router from './router';

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');
}

const { bootstrap, mount, unmount } = singleSpaVue({
  Vue,
  appOptions: {
    el: '#app',
    router,
    render: h => h(App),
  },
});

export { bootstrap, mount, unmount };
