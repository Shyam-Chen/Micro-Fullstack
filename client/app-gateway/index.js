import {
  registerMicroApps,
  initGlobalState,
  setDefaultMountApp,
  start,
  runAfterFirstMounted,
} from 'qiankun';

registerMicroApps(
  [
    {
      name: 'hello app',
      entry: '//localhost:8001',
      container: '#container',
      activeRule: '/hello',
    },
    {
      name: 'world app',
      entry: '//localhost:8002',
      container: '#container',
      activeRule: '/world',
    },
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
//   user: 'micro',
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
