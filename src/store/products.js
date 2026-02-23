import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    product: {},
    relatedProducts: [],
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchAll() {
      this.isLoading = true
      try {
        const products = await fetch('http://localhost:3001/products').then((res) => res.json())
        this.products = products
      } catch (error) {
        this.error = error
      } finally {
        this.isLoading = false
      }
    },

    async fetchById(id) {
      this.isLoading = true
      try {
        const product = await fetch(`http://localhost:3001/products/${id}`).then((res) =>
          res.json(),
        )
        this.product = product
        this.relatedProducts = this.products.filter((p) => p.id !== product.id)
      } catch (error) {
        this.error = error
      } finally {
        this.isLoading = false
      }
    },

    async buy(id) {
      const product = this.products.find((p) => p.id === id)
      if (!product || product.stock <= 0) return

      product.stock--
      product.inStock = product.stock > 0
      try {
        await fetch(`http://localhost:3001/products/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            stock: product.stock,
            inStock: product.inStock,
          }),
        })
      } catch (err) {
        product.stock++
        product.inStock = true
        this.error = err.message
      }
    },
  },
})
