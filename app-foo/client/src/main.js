import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import routes from './router';
// import store from './store';

let router = null;
let instance = null;

function render() {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app1' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    // store,
    render: h => h(App),
  }).$mount('#app');
}

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  render();
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}
