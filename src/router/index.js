import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/HomePage.vue'

import BakeryPage from '@/components/pages/BakeryPage.vue';

import DairyProducts from '@/components/pages/DairyProducts.vue';

import FruitsPage from '@/components/pages/FruitsPage.vue';

import MeatSeafood from '@/components/pages/Meat-Seafood.vue';

import PantryStaples from '@/components/pages/PantryStaples.vue';

import VegetablePage from '@/components/pages/VegetablePage.vue';


const routes = [

{ path: '/', component: HomePage },

{ path: '/fruits', component: FruitsPage },

{ path: '/vegetables', component: VegetablePage },

{ path: '/dairy', component: DairyProducts },

{ path: '/meat-seafood', component: MeatSeafood },

{ path: '/bakery', component: BakeryPage },

{ path: '/pantry', component: PantryStaples },


]

const router = createRouter({

    history: createWebHistory(),
 
    routes,

});

export default router;