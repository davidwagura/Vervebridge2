<template>

    <div class="container mx-auto py-8">

      <h1 class="text-3xl flex justify-center mt-6 underline font-bold mb-8">Explore Fresh vegetables</h1>
    
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
  
          <!-- vegetables Card -->
          <div v-for="vegetable in vegetables" :key="vegetable.id" class="bg-white rounded-lg overflow-hidden shadow-lg">
  
          <img :src="require(`../../assets/${vegetable.category}/${vegetable.image}`)" alt="vegetable" class="w-full h-64 object-cover">
  
          <div class="p-4"> 
  
            <h2 class="text-xl font-bold mb-2">{{ vegetable.name }}</h2>
    
            <p class="text-gray-700">{{ vegetable.description }}</p>
    
            <p class="text-gray-900 font-semibold">${{ vegetable.price }}</p>

            <div v-if="vegetable.showMessage" class="text-green-500 mt-2">

              {{ vegetable.message }}

            </div>   

            <button @click="addToCart(vegetable)" class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">

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

      const message = ref('');

      const showMessage = ref(false);
    
      const vegetables = ref([
        
        { id: 1, name: 'Carrot', description: 'Fresh and crunchy carrots, rich in beta-carotene.', image: 'carrot.jpeg', category: 'vegetable', price: 5 },

        { id: 2, name: 'Broccoli', description: 'Green and nutritious broccoli, perfect for steaming or stir-frying.', image: 'broccoli.jpeg', category: 'vegetable', price: 8 },

        { id: 3, name: 'Spinach', description: 'Leafy green spinach, rich in iron and vitamins.', image: 'spinach.jpeg', category: 'vegetable', price: 6 },

        { id: 4, name: 'Tomato', description: 'Juicy and ripe tomatoes, great for salads or sauces.', image: 'tomato.jpeg', category: 'vegetable', price: 4 },

        { id: 5, name: 'Bell Pepper', description: 'Colorful and crisp bell peppers, full of vitamins.', image: 'bell-pepper.jpeg', category: 'vegetable', price: 7 },

        { id: 6, name: 'Cucumber', description: 'Cool and refreshing cucumbers, perfect for salads.', image: 'cucumber.jpeg', category: 'vegetable', price: 3 },

        { id: 7, name: 'Eggplant', description: 'Versatile eggplants, ideal for grilling or baking.', image: 'egg-plant.jpeg', category: 'vegetable', price: 9 },

        { id: 8, name: 'Zucchini', description: 'Tender zucchinis, great for roasting or adding to stir-fries.', image: 'zucchini.jpeg', category: 'vegetable', price: 5 },

        { id: 9, name: 'Potato', description: 'Starchy potatoes, perfect for mashing or baking.', image: 'potato.jpeg', category: 'vegetable', price: 4 },

      ])

      const cartStore = useCartStore();
            
      const addToCart = (vegetable) => {

        cartStore.addToCartVegetable(vegetable);
              
        vegetable.message = 'Item added to cart';

        vegetable.showMessage = true;

        setTimeout(() => {

          vegetable.showMessage = false;

        }, 800);

      };

      return {

        vegetables,

        addToCart,

        message,

        showMessage,

      };

    },

  }
  
</script>
    