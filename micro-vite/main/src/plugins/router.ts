import { createWebHistory, createRouter } from 'vue-router';

import Home from '../modules/Home.vue';
import MicroApp from './MicroApp.vue';
import NotFound from '../modules/NotFound.vue';

export const history = createWebHistory();

export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: () => import('../modules/About.vue'),
    },

    {
      path: '/foo/:pathMatch(.*)*',
      component: MicroApp,
    },
    {
      path: '/bar/:pathMatch(.*)*',
      component: MicroApp,
    },

    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0 };
  },
});
