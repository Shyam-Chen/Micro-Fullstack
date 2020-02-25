import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './About.vue'),
  },
];

export default routes;
