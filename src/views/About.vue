<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
onMounted(() => {
  console.log('About Mounted')
})
onUnmounted(() => {
  console.log('About Unmounted')
})
</script>

<template>
  <div class="hero">
    <div class="hero-content">
      <div>
        <h1 class="text-3xl font-bold text-primary-content">
          Welcome to <span class="text-primary">ECOM</span>
        </h1>
        <p class="py-6">
          At ECOM, we’re redefining the way you shop online. Fast, smart, and seamless — that’s our
          promise. Our team is obsessed with quality, design, and creating an experience that makes
          every click count.
        </p>

        <h2 class="text-2xl font-semibold text-primary-content">Our Mission</h2>
        <p class="py-6">
          We exist to make shopping effortless. From discovering the latest trends to getting your
          order delivered in record time, we focus on what matters: simplicity, reliability, and
          delighting our customers every step of the way.
        </p>

        <h2 class="text-2xl font-semibold text-primary-content">What We Stand For</h2>
        <ul class="list-disc ms-10! py-6">
          <li>Innovation: Always finding smarter ways to serve you</li>
          <li>Quality: Only the best products make the cut</li>
          <li>Transparency: Clear info, honest pricing, zero surprises</li>
          <li>Community: We grow and improve with our customers</li>
        </ul>

        <h2 class="text-2xl font-semibold text-primary-content">Join the Movement</h2>
        <p class="py-6">
          Shopping should feel like fun, not a chore. At ECOM, we combine technology, curated
          products, and customer-first thinking to make it happen. Welcome to the future of online
          shopping — welcome to ECOM.
        </p>

        <RouterLink to="/">
          <button class="mt-6! btn btn-primary">Get Started</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
