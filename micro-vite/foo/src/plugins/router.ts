import { createWebHistory, createRouter } from 'vue-router';
import { qiankunWindow } from 'vite-plugin-qiankun/es/helper';

import NotFound from '../modules/NotFound.vue';

export const history = createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/foo' : '/');

export const router = createRouter({
  history,
  routes: [
    {
      path: '/codespaces',
      component: () => import('../modules/Codespaces.vue'),
    },
    {
      path: '/marketplace',
      component: () => import('../modules/Marketplace.vue'),
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
