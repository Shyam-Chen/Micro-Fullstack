import { h, createApp } from 'vue';
import { vueBridge } from '@garfish/bridge-vue-v3';

import App from './App.vue';

export const provider = vueBridge({
  rootComponent: App,
  appOptions: () => ({
    el: '#app',
    render: () => h(App),
  }),
});

if (!window.__GARFISH__) {
  const app = createApp(App);
  app.mount('#app');
}
