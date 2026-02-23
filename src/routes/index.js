import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/about', component: () => import('@/views/About.vue') },
  { path: '/products/:id', component: () => import('@/views/Product.vue') },
  { path: '/cart', component: () => import('@/views/Cart.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
