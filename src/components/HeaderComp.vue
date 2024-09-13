<template>
    <div class=" md:flex justify-center items-center h-screen bg-black">
      <div class="grid md:flex max-w-4xl mx-auto bg-black text-white">
        
        <div class="p-8">
          <p class="text-xl md:text-2xl tracking-widest capitalize text-white font-serif font-semibold "> 
            Chase The New Flavour
            <span><img src="/spoon.svg" class="w-10"></span>
          </p>
          <h1 class="text-5xl md:text-7xl font-bold mt-4 text-yellow tracking-wide md:leading-snug">The Key To Fine Dining</h1>
          <p class="text-gray-400 mt-6 text-sm text-[16px] leading-normal ">
            Sit talus laboris sed sanctus vivamus molestiae. Condimentum volutpat
            morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus".
          </p>
          <button class="mt-8 px-6 py-3 bg-yellow text-black font-semibold rounded hover:bg-gray-400 transition-colors">
            <a href="#gallery">
              Explore Menu

            </a>
          </button>
        </div>
        
        <div class="relative mx-6 md:mx-1">
          <img
            src="/Hero img.svg"
            alt="Dish Image"
            class="w-[900px]"
          />

         
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FineDining"
  };
  </script>
  