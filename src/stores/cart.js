import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {

  state: () => ({

    cart: []

  }),

  actions: {

    addToCart(fruit) {

      this.cart.push(fruit);

    },

    addToCartItem(item) {

      this.cart.push(item);

    },

    addToCartProduct(product) {

      this.cart.push(product);

    },

    addToCartVegetable(vegetable) {

      this.cart.push(vegetable);

    },

    addToCartFood(food) {

      this.cart.push(food);

    },

    addToCartPantry(pantry) {

      this.cart.push(pantry);

    },


    placeOrder() {

      this.cart = [];

    }
    
  },

  persist: true,  

});
