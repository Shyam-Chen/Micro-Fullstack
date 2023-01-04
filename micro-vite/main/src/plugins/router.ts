import { createWebHistory, createRouter } from 'vue-router';

import Home from '../modules/Home.vue';

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

    // {
    //   path: '/:pathMatch(.*)*',
    //   component: () => import('~/Error.vue'),
    //   meta: { layout: 'empty' },
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0 };
  },
});
