<template>

    <div class="container mx-auto py-8">
  
      <h1 class="text-3xl flex justify-center mt-6 underline font-bold mb-8">Explore Fresh items</h1>
    
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
  
          <!-- items Card -->
          <div v-for="item in bakeryItems" :key="item.id" class="bg-white rounded-lg overflow-hidden shadow-lg">
  
          <img :src="require(`../../assets/${item.category}/${item.image}`)" alt="item" class="w-full h-64 object-cover">
  
          <div class="p-4"> 
  
            <h2 class="text-xl font-bold mb-2">{{ item.name }}</h2>
    
            <p class="text-gray-700">{{ item.description }}</p>
    
            <p class="text-gray-900 font-semibold">${{ item.price }}</p>

            <div v-if="item.showMessage" class="text-green-500 mt-2">

              {{ item.message }}

            </div>
    
            <button @click="addToCart(item)" class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">

              Add To Cart

            </button>
  
          </div>
  
        </div>
  
      </div>
  
    </div>
  
  </template>
    
<script>
  import { ref } from 'vue';

  import { useCartStore } from '@/stores/cart';

  export default {

    setup() {
  
      const bakeryItems = ref([
    
        { id: 1, name: 'Sourdough Bread', description: 'Artisan sourdough bread with a crispy crust and chewy interior.', image: 'sourdough.jpeg',category: 'bakery', price: 25 },

        { id: 2, name: 'Croissant', description: 'Flaky and buttery croissants, perfect for breakfast or a snack.', image: 'croissant.jpeg',category: 'bakery', price: 15 },

        { id: 3, name: 'Chocolate Cake', description: 'Rich and moist chocolate cake with a decadent ganache.', image: 'chocolate-cake.jpeg',category: 'bakery', price: 5 },

        { id: 4, name: 'Blueberry Muffin', description: 'Freshly baked blueberry muffins bursting with flavor.', image: 'macaron.jpeg',category: 'bakery', price: 120 },

        { id: 5, name: 'Cinnamon Roll', description: 'Sweet and gooey cinnamon rolls with a cream cheese frosting.', image: 'cinnamon-roll.jpeg',category: 'bakery', price: 2 },

        { id: 6, name: 'Bagel', description: 'Chewy bagels perfect for breakfast or sandwiches.', image: 'bagel.jpeg',category: 'bakery', price: 80 },

        { id: 7, name: 'Apple Pie', description: 'Classic apple pie with a flaky crust and spiced filling.', image: 'apple-pie.jpeg',category: 'bakery', price: 3 },

        { id: 8, name: 'Brownie', description: 'Fudgy brownies with a rich chocolate flavor.', image: 'brownie.jpeg',category: 'bakery', price: 18 },

        { id: 9, name: 'Macaron', description: 'Delicate French macarons in a variety of flavors.', image: 'macaron.jpeg',category: 'bakery', price: 35 },
        
      ])

      const cartStore = useCartStore();
    
      const addToCart = (item) => {

        cartStore.addToCartItem(item);

        item.message = 'Item added to cart';

        item.showMessage = true;

        setTimeout(() => {

          item.showMessage = false;

        }, 800);
    
      }

      return {

        bakeryItems,

        addToCart

      };

    },
    
  }
  
</script>
    