<script setup>
import { onMounted, onUnmounted } from 'vue'
import Carousel from '@/components/Carousel.vue'
import ProductsList from '@/components/ProductsList.vue'

const slides = [
  {
    id: 1,
    img: 'https://placehold.co/1400x1000/orange/FFFFFF.png?text=Slide',
    next: 2,
    prev: null,
  },
  {
    id: 2,
    img: 'https://placehold.co/1400x1000/green/FFFFFF.png?text=Slide',
    next: 3,
    prev: 1,
  },
  {
    id: 3,
    img: 'https://placehold.co/1400x1000/red/FFFFFF.png?text=Slide',
    next: 4,
    prev: 2,
  },
  {
    id: 4,
    img: 'https://placehold.co/1400x1000/yellow/FFFFFF.png?text=Slide',
    next: 5,
    prev: 3,
  },
  {
    id: 5,
    img: 'https://placehold.co/1400x1000/black/FFFFFF.png?text=Slide',
    next: null,
    prev: 4,
  },
]

defineProps({
  products: {
    type: Array,
  },
})

onMounted(() => {
  console.log('Home Mounted')
})
onUnmounted(() => {
  console.log('Home Unmounted')
})
</script>

<template>
  <Carousel :slides="slides" />
  <ProductsList title="Our Products" :products="products" />
</template>
