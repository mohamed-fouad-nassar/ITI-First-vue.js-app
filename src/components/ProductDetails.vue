<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/store/cart'
import { useProductsStore } from '@/store/products'

const { product } = defineProps({
  product: {
    title: String,
    image: String,
    price: Number,
    stock: Number,
    inStock: Boolean,
    discount: Number,
    imageAlt: String,
    description: String,
  },
})

const store = useProductsStore()
const cartStore = useCartStore()

function handleImgError(event) {
  event.target.src = 'https://placehold.co/600x400?text=No+Image'
}

const priceWithDiscount = computed(() => {
  const finalPrice =
    product.inStock && product.discount != 0
      ? product.price * (1 - product.discount / 100)
      : product.price
  return finalPrice.toFixed(2)
})

const addToCart = (product) => cartStore.addToCart(product)
</script>

<template>
  <div class="hero">
    <div class="hero-content container flex-col flex-1 gap-10 lg:flex-row">
      <img
        :src="product.image"
        :alt="product.imageAlt"
        @error="handleImgError"
        class="mx-auto max-w-md rounded-lg"
      />
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
          <div class="flex items-center gap-2">
            <button class="btn btn-primary" @click="store.buy(product.id)">Buy Now</button>
            <button
              class="btn btn-secondary"
              :disabled="!product.inStock"
              @click="addToCart(product)"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div v-else>
          <p class="text-muted text-sm">This product is currently unavailable</p>
        </div>
      </div>
    </div>
  </div>
</template>
