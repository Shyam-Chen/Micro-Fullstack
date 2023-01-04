
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from 'qiankun';

import render from './render';

/**
 * Step1 初始化应用（可选）
 */
render({ loading: true });

const loader = (loading: any) => render({ loading });

/**
 * Step2 注册子应用
 */

registerMicroApps(
  [
    {
      name: 'foo',
      entry: 'http://127.0.0.1:6061',
      container: '#subapp-viewport',
      loader,
      activeRule: '/foo',
    },
    {
      name: 'bar',
      entry: 'http://127.0.0.1:6062',
      container: '#subapp-viewport',
      loader,
      activeRule: '/bar',
    },
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/foo');

/**
 * Step4 启动应用
 */
start({
  // sandbox: { strictStyleIsolation: true }
});

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
