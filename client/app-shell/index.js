import Vue from 'vue';
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';

import Framework from './Framework.vue';

let app = null;

function render({ appContent, loading, blank }) {
  if (!app) {
    app = new Vue({
      el: '#container',
      data() {
        return {
          content: appContent,
          loading,
          blank,
        };
      },
      render(h) {
        return h(Framework, {
          props: {
            content: this.content,
            loading: this.loading,
            blank: this.blank,
          },
        });
      },
    });
  } else {
    app.content = appContent;
    app.loading = loading;
    app.blank = blank;
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
    { name: 'hello app', entry: '//localhost:8001', render, activeRule: genActiveRule('/hello') },
    {
      name: 'world app',
      entry: '//localhost:8002',
      render: ({ appContent, loading }) => render({ appContent, loading, blank: true }),
      activeRule: genActiveRule('/world'),
    },
  ],
  {
    beforeLoad: [
      app => {
        console.log('before load', app);
      },
    ],
    beforeMount: [
      app => {
        console.log('before mount', app);
      },
    ],
    afterUnmount: [
      app => {
        console.log('after unload', app);
      },
    ],
  },
);

setDefaultMountApp('/hello');

start({ prefetch: true });
