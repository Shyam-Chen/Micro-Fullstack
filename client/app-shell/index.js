import 'zone.js';
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';

registerMicroApps([
  {
    name: 'mod-vue',
    entry: process.env.ENTRY_VUE,
    container: '#app-root',
    activeRule: '/vue',
  },
  {
    name: 'mod-react',
    entry: process.env.ENTRY_REACT,
    container: '#app-root',
    activeRule: '/react',
  },
  {
    name: 'mod-angular',
    entry: process.env.ENTRY_ANGULAR,
    container: '#app-root',
    activeRule: '/angular',
  },
  // {
  //   name: 'mod-svelte',
  //   entry: process.env.ENTRY_SVELTE,
  //   container: '#app-root',
  //   activeRule: '/svelte',
  // },
]);

setDefaultMountApp('/vue');

start();
