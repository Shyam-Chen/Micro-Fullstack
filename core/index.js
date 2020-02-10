import Vue from 'vue';
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';

import Framework from './Framework.vue';

let app = null;

function render({ appContent, loading }) {
  if (!app) {
    app = new Vue({
      el: '#container',
      data() {
        return {
          content: appContent,
          loading,
        };
      },
      render(h) {
        return h(Framework, {
          props: {
            content: this.content,
            loading: this.loading,
          },
        });
      },
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

function initApp() {
  render({ appContent: '', loading: true });
}

initApp();

registerMicroApps(
  [
    { name: 'app1', entry: '//localhost:8001', render, activeRule: genActiveRule('/app1') },
    { name: 'app2', entry: '//localhost:8002', render, activeRule: genActiveRule('/app2') },
  ],
  {
    beforeLoad: [
      app => {
        console.log('[*] beforeLoad ', app);
      },
    ],
    beforeMount: [
      app => {
        console.log('[*] beforeMount ', app);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[*] afterUnmount ', app);
      },
    ],
  },
);

setDefaultMountApp('/app1');

start({ prefetch: true });
