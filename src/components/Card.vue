<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const { product } = defineProps({
  product: {
    id: Number,
    title: String,
    img: String,
    description: String,
    stock: Number,
    price: Number,
    discount: Number,
    inStock: Boolean,
  },
})

const priceWithDiscount = computed(() => {
  if (product.inStock && product.discount != 0) {
    return product.price * (1 - product.discount / 100)
  } else {
    return product.price
  }
})
</script>

<template>
  <div class="card bg-base-100 shadow-sm">
    <figure>
      <img :src="product.img" :alt="product.title" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-primary-content font-semibold! text-xl">{{ product.title }}</h2>
      <p>
        {{ product.description }}
      </p>
      <div class="card-actions">
        <div v-if="product.inStock" class="flex items-center w-full mt-3!">
          <p v-if="product.inStock" class="flex-1 space-x-3!">
            <span v-if="product.discount > 0" class="line-through text-sm opacity-50">
              {{ product.price }} $
            </span>
            <span class="inline-block text-xl text-accent font-bold">
              {{ priceWithDiscount }} $
            </span>
          </p>
          <RouterLink :to="`/products/${product.id}`">
            <button class="btn btn-primary">Show Details</button>
          </RouterLink>
        </div>
        <div v-else class="mx-auto!">
          <p class="text-muted text-sm">This product is currently unavailable</p>
        </div>
      </div>
    </div>
  </div>
</template>
