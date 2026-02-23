import { watch } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    isPlacingOrder: false,
    error: null,
  }),

  getters: {
    totalItems: (state) => state.cart.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
  },

  actions: {
    addToCart(product) {
      const existing = this.cart.find((item) => item.id === product.id)
      if (existing) existing.quantity++
      else this.cart.push({ ...product, quantity: 1 })
    },

    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
    },

    increaseQuantity(id) {
      const item = this.cart.find((i) => i.id === id)
      if (item) item.quantity++
    },

    decreaseQuantity(id) {
      const item = this.cart.find((i) => i.id === id)
      if (!item) return
      if (item.quantity === 1) this.removeFromCart(id)
      else item.quantity--
    },

    clearCart() {
      this.cart = []
    },

    async placeOrder() {
      if (!this.cart.length) return

      this.isPlacingOrder = true
      this.error = null

      try {
        await Promise.all(
          this.cart.map(async (item) => {
            const newStock = item.stock - item.quantity

            await fetch(`http://localhost:3001/products/${item.id}`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                stock: newStock,
                inStock: newStock > 0,
              }),
            })
          }),
        )

        this.clearCart()
        localStorage.removeItem('cart')
      } catch (err) {
        this.error = err.message
      } finally {
        this.isPlacingOrder = false
      }
    },
  },
})

export function setupCartPersistence(store) {
  const saved = localStorage.getItem('cart')
  if (saved) store.cart = JSON.parse(saved)

  watch(
    () => store.cart,
    (cart) => {
      localStorage.setItem('cart', JSON.stringify(cart))
    },
    { deep: true },
  )
}
