import Vue from 'vue';

import App from './App.vue';
import router from './router';

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

let instance = null;

function render() {
  instance = new Vue({
    router,
    // store,
    render: h => h(App),
  }).$mount('#app');
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
}
