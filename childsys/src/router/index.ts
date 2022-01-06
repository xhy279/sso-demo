import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import('@/views/error.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
