<template>
  <div class="container mx-auto py-8">

    <h1 class="text-3xl flex justify-center mt-6 underline font-bold mb-8">Explore Fresh Fruits</h1>
  
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">

        <!-- Fruits Card -->
        <div v-for="fruit in fruits" :key="fruit.id" class="bg-white rounded-lg overflow-hidden shadow-lg">

          <img :src="require(`../../assets/${fruit.category}/${fruit.image}`)" alt="Fruit" class="w-full h-64 object-cover">

        <div class="p-4"> 

        <h2 class="text-xl font-bold mb-2">{{ fruit.name }}</h2>

        <p class="text-gray-700">{{ fruit.description }}</p>

        <p class="text-gray-900 font-semibold">${{ fruit.price }}</p>

          <div v-if="fruit.showMessage" class="text-green-500 mt-2">

            {{ fruit.message }}

          </div>
            
        <button @click="addToCart(fruit)" class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">

          Add To Cart

        </button>

      </div>

    </div>

    </div>

  </div>

</template>
  
<script>
import { useCartStore } from '@/stores/cart';

import { ref } from 'vue';

  export default {

    setup() {

      const fruits = ref([

        { id: 1, name: 'Apple', description: 'Crisp and juicy apples from local orchards.', image: 'apples.jpeg',category: 'fruits', price: 1.5 },

        { id: 2, name: 'Orange', description: 'Sweet and tangy oranges bursting with vitamin C.', image: 'oranges.jpeg',category: 'fruits', price: 10 },

        { id: 3, name: 'Banana', description: 'Nutritious and delicious bananas perfect for a quick snack.', image: 'bananas.jpeg',category: 'fruits', price: 5 },

        { id: 4, name: 'Strawberry', description: 'Fresh and sweet strawberries, perfect for desserts.', image: 'strawberry.jpeg',category: 'fruits', price: 2 },

        { id: 5, name: 'Grapes', description: 'Juicy grapes that are great for snacking and wine-making.', image: 'grapes.jpeg',category: 'fruits', price: 18 },

        { id: 6, name: 'Pineapple', description: 'Tropical pineapples with a sweet and tangy flavor.', image: 'pineapple.jpeg',category: 'fruits', price: 12 },

        { id: 7, name: 'Watermelon', description: 'Refreshing watermelons perfect for hot summer days.', image: 'watermelon.jpeg',category: 'fruits', price: 9 },

        { id: 8, name: 'Mango', description: 'Sweet and juicy mangoes from tropical regions.', image: 'mangos.jpeg',category: 'fruits', price: 13 },

        { id: 9, name: 'Blueberry', description: 'Antioxidant-rich blueberries perfect for snacks and baking.', image: 'blueberry.jpeg',category: 'fruits', price: 2.2 },        

      ]);

      const cartStore = useCartStore();

      const addToCart = (fruit) => {

        cartStore.addToCart(fruit);

        fruit.message = 'Item added to cart';

        fruit.showMessage = true;

        setTimeout(() => {

          fruit.showMessage = false;
            
        }, 800);

      }

      return {

        fruits,

        addToCart,

      };

    },

  };

</script>
  