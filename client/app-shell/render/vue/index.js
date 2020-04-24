import Vue from 'vue/dist/vue.esm';

import Render from './Render.vue';

let app = null;

export default ({ appContent, loading }) => {
  if (!app) {
    app = new Vue({
      el: '#container',
      data() {
        return { appContent, loading };
      },
      render(h) {
        return h(Render, {
          props: { appContent, loading }
        });
      },
    });
  } else {
    app.appContent = appContent;
    app.loading = loading;
  }
};
