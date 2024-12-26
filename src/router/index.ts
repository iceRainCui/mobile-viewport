import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import('@/pages/login/index.vue'),
  },

  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: () => import('@/pages/home/index.vue'),
  },

  // 替代vue2中的'*'通配符路径
  { path: '/:pathMatch(.*)*', redirect: '/login' },
];

const router = createRouter({
  history: createWebHistory('/'), // history 模式则使用 createWebHistory()
  routes,
});
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title as string;
  next();
});
export default router;
