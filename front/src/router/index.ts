import { createRouter, createWebHistory } from 'vue-router'
import account from '@/router/account.ts'
import post from '@/router/post.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/account',
      children: account,
    },
    {
      path: '/post',
      children: post,
    },
    {
      path: '/finder',
      component: () => import('@/views/finder/FinderMain.vue'),
    },
  ],
})

export default router
