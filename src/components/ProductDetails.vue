<script setup>
import { computed } from 'vue'

const { product } = defineProps({
  product: {
    title: String,
    img: String,
    price: Number,
    stock: Number,
    inStock: Boolean,
    discount: Number,
    description: String,
  },
})

const buyProductEmit = defineEmits(['buy'])

const buyProduct = (productId) => {
  buyProductEmit('buy', productId)
}

const priceWithDiscount = computed(() => {
  if (product.inStock && product.discount != 0) {
    return product.price * (1 - product.discount / 100)
  } else {
    return product.price
  }
})
</script>

<template>
  <div class="hero">
    <div class="hero-content container flex-col flex-1 gap-10 lg:flex-row">
      <img :src="product.img" :alt="product.title" class="mx-auto max-w-md rounded-lg" />
      <div class="flex-1">
        <h1 class="text-3xl font-semibold! text-primary-content">{{ product.title }}</h1>
        <p class="py-6">
          {{ product.description }}
        </p>
        <div v-if="product.inStock" class="flex items-center gap-6 w-full">
          <p class="flex-1 space-x-3!">
            <span v-if="product.discount > 0" class="line-through text-sm opacity-50">
              {{ product.price }} $
            </span>
            <span class="text-xl text-accent font-bold"> {{ priceWithDiscount }} $ </span>
          </p>
          <p class="badge">{{ product.stock }} in stock</p>
          <button class="btn btn-primary" @click="buyProduct(product.id)">Buy Now</button>
        </div>
        <div v-else>
          <p class="text-muted text-sm">This product is currently unavailable</p>
        </div>
      </div>
    </div>
  </div>
</template>
