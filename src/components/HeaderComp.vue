<template>
    <div class=" md:flex justify-center items-center h-screen bg-grey">
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
            Explore Menu
          </button>
        </div>
        
        <div class="relative mx-6 md:mx-1">
          <img
            src="/Hero img.svg"
            alt="Dish Image"
            class="w-[900px]"
          />
          <div class="absolute top-4 left-4 flex space-x-2">
            <div class="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">H</div>
            <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold">H</div>
          </div>
         
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FineDining"
  };
  </script>
  