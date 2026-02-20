<script setup>
defineProps({
  slides: {
    type: Array,
  },
})
</script>

<template>
  <div class="carousel w-full h-150 rounded-2xl">
    <div
      v-for="slide in slides"
      :key="slide.id"
      :id="`slide${slide.id}`"
      class="carousel-item relative w-full"
    >
      <img :src="`${slide.img} ${slide.id}`" class="w-full object-cover" />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a :href="slide.prev ? `#slide${slide.prev}` : '#'" class="btn btn-circle">❮</a>
        <a :href="slide.next ? `#slide${slide.next}` : '#'" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>
