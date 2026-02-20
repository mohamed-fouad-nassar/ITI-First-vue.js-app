<script setup>
import { computed, ref } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

const routes = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/products/1', title: 'Product Details' },
]

const products = ref([
  {
    id: 1,
    title: 'Laptop',
    price: 15000,
    discount: 5,
    stock: 10,
    inStock: true,
    img: 'https://placehold.co/600x400/orange/FFFFFF.png?text=Product 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    title: 'Mouse',
    price: 300,
    discount: 20,
    stock: 0,
    inStock: false,
    img: 'https://placehold.co/600x400/000000/FFFFFF.png?text=Product 2',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    title: 'Keyboard',
    price: 800,
    discount: 10,
    stock: 0,
    inStock: false,
    img: 'https://placehold.co/600x400/red/FFFFFF.png?text=Product 3',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    title: 'Mouse pad',
    price: 100,
    discount: 0,
    stock: 5,
    inStock: true,
    img: 'https://placehold.co/600x400/green/FFFFFF.png?text=Product 4',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    title: 'Headset',
    price: 500,
    discount: 2,
    stock: 10,
    inStock: true,
    img: 'https://placehold.co/600x400/blue/FFFFFF.png?text=Product 5',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
])

const router = useRoute()
const productId = computed(() => parseInt(router.params.id))
const product = computed(() => products.value[--productId.value])
const relatedProducts = computed(() => products.value.filter((p) => p.id !== product.id))

const buyHandler = (id) => {
  console.log(`Buying product with id: ${id}`)
  decreaseStock(id)
}

const decreaseStock = (id) => {
  const product = products.value.find((p) => p.id === id)
  if (product && product.stock > 0) {
    product.stock--
    product.inStock = product.stock > 0
  }
}
</script>

<template>
  <Header logo="ECOM" :routes="routes" />
  <main class="min-h-[calc(100vh-65px)] container py-10 mx-auto!">
    <RouterView
      @buy="buyHandler"
      :products="products"
      :productId="productId"
      :product="product"
      :relatedProducts="relatedProducts"
    />
  </main>
  <Footer :routes="routes" />
</template>
