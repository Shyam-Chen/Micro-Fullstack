import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';

registerMicroApps([
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
]);

setDefaultMountApp('/foo');

start();
