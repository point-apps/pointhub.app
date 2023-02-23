import { createRouter, createWebHistory } from 'vue-router'
import { routes as pagesRoutes } from '@/modules/pages/routes'

const routes = [pagesRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
