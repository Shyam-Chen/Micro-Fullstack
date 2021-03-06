import singleSpaSvelte from 'single-spa-svelte';

import App from './App';

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  new App({ target: document.querySelector('#app-root') });
}

const { bootstrap, mount, unmount } = singleSpaSvelte({
  component: App,
  domElementGetter: () => document.querySelector('#app-root'),
});

export { bootstrap, mount, unmount };
