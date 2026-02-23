<script setup>
import { RouterView } from 'vue-router'

import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { setupCartPersistence, useCartStore } from './store/cart'

const routes = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/products/1', title: 'Product Details' },
  { path: '/cart', title: 'Cart' },
]

const cartStore = useCartStore()
setupCartPersistence(cartStore)
</script>

<template>
  <Header logo="ECOM" :routes="routes" />
  <main class="min-h-[calc(100vh-65px)] container py-10 mx-auto!">
    <RouterView />
  </main>
  <Footer :routes="routes" />
</template>
