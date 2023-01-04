import { createWebHistory, createRouter } from 'vue-router';
import { qiankunWindow } from 'vite-plugin-qiankun/es/helper';

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
