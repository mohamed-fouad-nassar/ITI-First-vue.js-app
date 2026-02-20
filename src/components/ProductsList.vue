<script setup>
import Card from './Card.vue'

const { products } = defineProps({
  title: String,
  products: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="py-20 container mx-auto!">
    <h2 class="text-2xl pb-5 text-primary-content font-bold!">{{ title }}</h2>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>
