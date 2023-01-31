import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/LastPage.vue'),
    },
    {
      path: '/post/:postId',
      component: () => import('@/views/PostPage.vue'),
    },
  ],
});
