import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/list.vue'),
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('@/views/editor.vue'),
    },
  ],
})

export default router
