<script setup>
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/store/products'
import ProductsList from '@/components/ProductsList.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import { computed, onMounted, onUnmounted, watch } from 'vue'

const router = useRoute()
const store = useProductsStore()
const id = computed(() => parseInt(router.params.id))

watch(
  id,
  (newId) => {
    store.fetchById(newId)
  },
  { immediate: true },
)

onMounted(() => {
  store.fetchAll()
  store.fetchById(id.value)
  console.log('Single Product Mounted')
})
onUnmounted(() => {
  console.log('Single Product Unmounted')
})
</script>

<template>
  <div v-if="store.isLoading">Loading...</div>
  <div v-else-if="store.error">Error: {{ store.error }}</div>
  <div v-else>
    <ProductDetails :product="store.product" />
    <ProductsList title="Related Products" :products="store.relatedProducts" />
  </div>
</template>
