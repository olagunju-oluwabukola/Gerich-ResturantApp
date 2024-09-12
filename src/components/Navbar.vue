<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="bg-black text-white px-4 py-3 flex justify-between items-center font-sans">
      <div class="flex items-center">
        <h1 class="text-2xl font-bold font-serif">GERICHT</h1>
      </div>
      
      <div class="hidden lg:flex space-x-6">
        <router-link to="/" class="hover:text-gray-400">Home</router-link>
        <router-link to="/pages" class="hover:text-gray-400">Pages</router-link>
        <router-link to="/contact-us" class="hover:text-gray-400">Contact Us</router-link>
        <router-link to="/blog" class="hover:text-gray-400">Blog</router-link>
        <router-link to="/landing" class="hover:text-gray-400">Landing</router-link>
      </div>
      
      <div class="hidden lg:flex space-x-4 items-center">
        <router-link to="/login" class="hover:text-gray-400">Log In / Registration</router-link>
        <router-link to="/book-table" class="hover:text-gray-400">Book Table</router-link>
      </div>
  
      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="lg:hidden">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
  
      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="lg:hidden absolute top-14 left-0 w-full bg-black flex flex-col space-y-4 px-6 py-4">
        <router-link to="/" class="hover:text-gray-400">Home</router-link>
        <router-link to="/pages" class="hover:text-gray-400">Pages</router-link>
        <router-link to="/contact-us" class="hover:text-gray-400">Contact Us</router-link>
        <router-link to="/blog" class="hover:text-gray-400">Blog</router-link>
        <router-link to="/landing" class="hover:text-gray-400">Landing</router-link>
        <router-link to="/login" class="hover:text-gray-400">Log In / Registration</router-link>
        <router-link to="/book-table" class="hover:text-gray-400">Book Table</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
    },
  };
  </script>
  
 
  