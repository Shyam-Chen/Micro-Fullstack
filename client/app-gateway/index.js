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
      name: 'foo app',
      entry: process.env.ENTRY_FOO,
      container: '#app-root',
      activeRule: '/foo',
    },
    {
      name: 'bar app',
      entry: process.env.ENTRY_BAR,
      container: '#app-root',
      activeRule: '/bar',
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

setDefaultMountApp('/foo');

start();

// runAfterFirstMounted(() => {
//   console.log('[MainApp] first app mounted');
// });
