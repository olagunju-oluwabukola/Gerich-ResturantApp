// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/page/:category',
      name: 'FoodList',
      component: () => import('../views/PageView.vue'),  
      props: true,
    },
    {
      path: '/food/:idMeal',
      name: 'FoodDetail',
      component: () => import('../views/FoodView.vue'), 
      props: true,
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'), 
      props: true,
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'), 
      props: true,
    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import('../views/bookAtable.vue'), 
      props: true,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'), 
      props: true,
    },
  ],
});

export default router;
