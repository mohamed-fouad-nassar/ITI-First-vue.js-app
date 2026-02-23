<script setup>
import CartItem from '@/components/CartItem.vue'
import { useCartStore } from '@/store/cart'
import { useProductsStore } from '@/store/products'

const cartStore = useCartStore()
const productsStore = useProductsStore()

const cart = cartStore.cart
const totalItems = cartStore.totalItems
const totalPrice = cartStore.totalPrice
const isPlacingOrder = cartStore.isPlacingOrder

const checkout = async () => {
  await cartStore.placeOrder()
  await productsStore.fetchAll()
}
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Your Shopping Cart</h1>

    <div v-if="!cart.length" class="text-gray-500 text-center py-20">Your cart is empty.</div>

    <div v-else class="space-y-4">
      <CartItem v-for="item in cart" :key="item.id" :item="item" />

      <div class="border-t pt-4 flex flex-col md:flex-row justify-between items-center">
        <div class="space-y-1">
          <p class="font-semibold">Total Items: {{ totalItems }}</p>
          <p class="font-bold text-lg">Total Price: {{ totalPrice.toFixed(2) }}$</p>
        </div>
        <button class="btn btn-primary mt-2 md:mt-0" :disabled="isPlacingOrder" @click="checkout">
          {{ isPlacingOrder ? 'Placing Order...' : 'Place Order' }}
        </button>
      </div>
    </div>
  </div>
</template>
