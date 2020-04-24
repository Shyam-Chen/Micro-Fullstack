import 'normalize.css/normalize.css';
import {
  registerMicroApps,
  initGlobalState,
  setDefaultMountApp,
  start,
  runAfterFirstMounted,
} from 'qiankun';

import render from './render/vue';

render({ loading: true });

registerMicroApps(
  [
    {
      name: 'hello app',
      entry: '//localhost:8001',
      container: '#subapp-viewport',
      activeRule: '/hello',
    },
    {
      name: 'world app',
      entry: '//localhost:8002',
      container: '#subapp-viewport',
      activeRule: '/world',
    },
    // {
    //   name: 'svelte-webpack',
    //   entry: '//localhost:9000',
    //   render,
    //   activeRule: '/svelte-webpack',
    // },
  ],
  // {
  //   beforeLoad: [
  //     app => {
  //       console.log('before load', app);
  //     },
  //   ],
  //   beforeMount: [
  //     app => {
  //       console.log('before mount', app);
  //     },
  //   ],
  //   afterUnmount: [
  //     app => {
  //       console.log('after unload', app);
  //     },
  //   ],
  // },
);

// const { onGlobalStateChange, setGlobalState } = initGlobalState({
//   user: 'qiankun',
// });

// onGlobalStateChange((value, prev) => {
//   console.log('[onGlobalStateChange - app-shell]:', value, prev);
// });

// setGlobalState({
//   ignore: 'master',
//   user: {
//     name: 'master',
//   },
// });

setDefaultMountApp('/hello');

start();

// runAfterFirstMounted(() => {
//   console.log('[MainApp] first app mounted');
// });
