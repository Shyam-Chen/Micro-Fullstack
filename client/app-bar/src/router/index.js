import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? '/bar' : '/',
  mode: 'history',
  routes,
});

export default router;
