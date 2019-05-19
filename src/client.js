import 'vuetify/src/stylus/app.styl';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import Vuetify, { VApp, VNavigationDrawer, VFooter, VToolbar, VFadeTransition } from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';

import App from './App';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VFadeTransition,
  },
  directives: {
    Ripple,
  },
});

const vm = new Vue({
  router,
  store,
  apolloProvider,
  i18n,
  render: handle => handle(App),
});

vm.$mount('#app');

if (module.hot) {
  module.hot.accept();
}
