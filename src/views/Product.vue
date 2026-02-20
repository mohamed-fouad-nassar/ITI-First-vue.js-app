<script setup>
import { onMounted, onUnmounted } from 'vue'
import ProductsList from '@/components/ProductsList.vue'
import ProductDetails from '@/components/ProductDetails.vue'

defineProps({
  product: Object,
  relatedProducts: Array,
})

const buyProductEmit = defineEmits(['buy'])

const buyProduct = (productId) => {
  buyProductEmit('buy', productId)
}

onMounted(() => {
  console.log('Single Product Mounted')
})
onUnmounted(() => {
  console.log('Single Product Unmounted')
})
</script>

<template>
  <ProductDetails @buy="buyProduct" :product="product" />
  <ProductsList title="Related Products" :products="relatedProducts" />
</template>
