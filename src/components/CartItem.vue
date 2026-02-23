<script setup>
import { useCartStore } from '@/store/cart'

const { item } = defineProps({
  item: Object,
})

const cartStore = useCartStore()

const increase = () => cartStore.increaseQuantity(item.id)
const decrease = () => cartStore.decreaseQuantity(item.id)
const remove = () => cartStore.removeFromCart(item.id)
</script>

<template>
  <div class="flex items-center justify-between p-2 border-b">
    <div class="flex items-center gap-2">
      <img :src="item.image" :alt="item.imageAlt" class="w-16 h-16 object-cover rounded" />
      <div>
        <p class="font-semibold">{{ item.title }}</p>
        <p class="text-gray-500">
          {{ item.price.toFixed(2) }}$ × {{ item.quantity }} =
          {{ (item.price * item.quantity).toFixed(2) }}$
        </p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <button class="btn btn-sm text-xl btn-outline" @click="decrease">-</button>
      <span class="px-2">{{ item.quantity }}</span>
      <button class="btn btn-sm text-xl btn-outline" @click="increase">+</button>
      <button class="btn btn-sm text-xl btn-error" @click="remove">×</button>
    </div>
  </div>
</template>
