<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  logo: {
    type: String,
    required: true,
  },
  routes: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <header class="bg-base-100 shadow-sm">
    <div class="container mx-auto!">
      <nav class="navbar">
        <div class="navbar-start">
          <RouterLink to="/" class="text-xl text-primary-content">{{ logo }}</RouterLink>
        </div>
        <div class="navbar-end lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li v-for="route in routes">
              <RouterLink :key="route.path" :to="route.path">{{ route.title }}</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
