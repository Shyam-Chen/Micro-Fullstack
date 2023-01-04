import { registerMicroApps, start } from 'qiankun';

import render from './render';

render({ loading: true });

const loader = (loading: boolean) => render({ loading });

registerMicroApps([
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
]);

start();
