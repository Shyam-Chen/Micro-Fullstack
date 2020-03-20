import Vue from 'vue';

import Render from './Render.vue';

let app = null;

export default ({ appContent, loading, blank }) => {
  if (!app) {
    app = new Vue({
      el: '#container',
      data() {
        return {
          content: appContent,
          loading,
          blank,
        };
      },
      render(h) {
        return h(Render, {
          props: {
            content: this.content,
            loading: this.loading,
            blank: this.blank,
          },
        });
      },
    });
  } else {
    app.content = appContent;
    app.loading = loading;
    app.blank = blank;
  }
};
