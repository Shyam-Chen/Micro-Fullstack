import type { App as Root } from 'vue';
import { createApp } from 'vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/es/helper';

import App from './App.vue';

let root: Root;

function render(props: any) {
  const { container } = props;
  root = createApp(App);
  const c = container ? container.querySelector('#app') : '#app';
  root.mount(c);
}

renderWithQiankun({
  mount(props) {
    render(props);
  },
  bootstrap() {},
  unmount(props: any) {
    root.unmount();
  },
  update(props: any) {},
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
