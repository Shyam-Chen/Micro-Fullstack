import 'zone.js';
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vue app',
    entry: process.env.ENTRY_VUE,
    container: '#app-root',
    activeRule: '/vue',
  },
  {
    name: 'bar app',
    entry: process.env.ENTRY_BAR,
    container: '#app-root',
    activeRule: '/bar',
  },
  {
    name: 'react16 app',
    entry: '//localhost:8003',
    container: '#app-root',
    activeRule: '/react16',
  },
  {
    name: 'angular9 app',
    entry: '//localhost:8004',
    container: '#app-root',
    activeRule: '/angular9',
  },
]);

setDefaultMountApp('/vue');

start();
