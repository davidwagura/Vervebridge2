<template>

  <div class="container mt-3 mx-auto py-8">

    <h1 class="text-3xl font-bold mb-8 underline flex justify-center mt-3">Checkout</h1>

    <div v-if="cart.length === 0" class="text-center text-gray-700">

      Your cart is empty

    </div>

    <div v-else class="grid grid-cols-1 gap-8 p-1">

      <div class="bg-white rounded-lg overflow-hidden shadow-lg p-4">

        <table class="w-1/2 mx-auto text-center border-collapse">

          <thead>

            <tr class="border-b">

              <th class="p-4 text-left">Item</th>

              <th class="p-4 text-left">Amount</th>

              <th class="p-4 text-left">Total</th>

              <th class="p-4 text-left">Action</th>

            </tr>

          </thead>

          <tbody>

            <tr v-for="item in cart" :key="item.id" class="border-b">

              <td class="p-4 flex items-center">

                <img :src="require(`../../assets/${item.category}/${item.image}`)" alt="Item" class="w-24 h-24 object-cover mr-4">

                <div>

                  <h2 class="text-xl font-bold">{{ item.name }}</h2>

                </div>

              </td>

              <td class="p-4">${{ item.price }}</td>

              <td class="p-4">${{ itemTotal(item) }}</td>

              <td class="p-4">

                <button @click="removeFromCart(item.id)" class="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">

                  Remove

                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

      <div class="bg-white rounded-lg overflow-hidden shadow-lg p-4 -mb-8">

        <h2 class="text-xl font-bold mb-2">Order Summary</h2>

        <p class="text-gray-700">Total Price:${{ totalPrice }}</p>

        <p class="text-gray-700">Tax (16%):${{ tax }}</p>

        <p class="text-gray-900 font-semibold">Total Amount:${{ totalAmount }}</p>

        <a href="" @click="confirmCheckout" class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">

          Proceed to Payment

        </a>

      </div>

    </div>

  </div>

</template>

<script>

  import { computed } from 'vue';

  import { useCartStore } from '@/stores/cart.js';

  import { useRouter } from 'vue-router';


  export default {

    setup() {

      const cartStore = useCartStore();

      const router = useRouter();

      const totalPrice = computed(() => {

        return cartStore.cart.reduce((acc, item) => acc + item.price, 0);

      });

      const tax = computed(() => {

        return totalPrice.value * 0.16;

      });

      const totalAmount = computed(() => {

        return totalPrice.value + tax.value;

      });

      const itemTotal = (item) => {

        return item.price;

      };

      const removeFromCart = (itemId) => {

        cartStore.removeFromCart(itemId);

      };

      const clearCart = () => {

        cartStore.clearCart();

      };

      const confirmCheckout = () => {

        if (confirm('Do you really want to proceed to payment?')) {

          router.push('/payment').then(() => {

            clearCart();

          });

        } else {

          clearCart();

          router.push('/');

        }

      }

      return {

        cart: cartStore.cart,

        totalPrice,

        tax,

        totalAmount,

        removeFromCart,

        clearCart,

        itemTotal,

        confirmCheckout,

      };

    },

  };
  
</script>
