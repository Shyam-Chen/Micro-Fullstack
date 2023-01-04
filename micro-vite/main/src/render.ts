import { createApp } from 'vue';

import { router } from './plugins/router';
import App from './App.vue';

function vueRender({ loading }: any) {
  return createApp(App).use(router).mount('#app');
}

let app: any = null;

export default function render({ loading }: any) {
  if (!app) {
    app = vueRender({ loading });
  } else {
    app.loading = loading;
  }
}
