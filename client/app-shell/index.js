import Vue from 'vue';
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';

import render from './render/vue';

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

function initApp() {
  render({ appContent: '', loading: true });
}

initApp();

// TODO: web components

registerMicroApps(
  [
    {
      name: 'hello app',
      entry: '//localhost:8001',
      render,
      activeRule: genActiveRule('/hello'),
    },
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
