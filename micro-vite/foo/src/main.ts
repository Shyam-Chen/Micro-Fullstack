import type { App as Root } from 'vue';
import { createApp } from 'vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/es/helper';

import { router } from './plugins/router';
import App from './App.vue';

let root: Root;

function render(props: any) {
  const { container } = props;
  root = createApp(App);
  root.use(router);
  const c = container ? container.querySelector('#app') : '#app';
  root.mount(c);
}

renderWithQiankun({
  mount(props) {
    console.log('[bar] mount');
    render(props);
  },
  bootstrap() {
    console.log('[bar] bootstrap');
  },
  unmount(props: any) {
    console.log('[bar] unmount');
    root.unmount();
  },
  update(props: any) {
    console.log('[bar] update');
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
