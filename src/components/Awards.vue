<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section class="bg-black text-white py-12 px-6 md:px-20 lg:px-32 md:flex justify-between items-center">
      <!-- Left Section -->
      <div class="w-full md:w-1/2 font-serif">
        <h2 class=" text-lg md:text-3xl mb-2">Awards & Recognition <span><img src="/spoon.svg" alt=""></span></h2>
        <h1 class="text-4xl md:text-6xl font-serif mb-8 text-yellow">Our Laurels</h1>
        <div class="grid md:grid-cols-2 gap-6 md:gap-4">
          <div v-for="(award, index) in awards" :key="index" class="flex items-center space-x-4">
            <div class="text-4xl font-bold">
             <img :src=award.number alt="">
            </div>
            <div>
              <h3 class="text-xl text-yellow">{{ award.title }}</h3>
              <p class="text-gray-400">{{ award.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right Section -->
      <div class=" w-full md:w-1/2">
        <img src="/img.svg" alt="Delicious Dish" class="rounded-lg shadow-lg px-4 h-[400px] md:h-[500px] w-[350px] md:w-[700px]">

     
      </div>
    </section>
  </template>
  
  <script>
 import one from "/public/one.svg"
 import two from "/public/two.svg"
  import three from "/public/three.svg"
   import five from "/public/five.svg"
  export default {
    data() {
      return {
        awards: [
          { number: one, title: "Bib Gourmand", description: "Lorem ipsum dolor sit amet, consectetur." },
          { number: two, title: "Rising Star", description: "Lorem ipsum dolor sit amet, consectetur." },
          { number: five, title: "AA Hospitality", description: "Lorem ipsum dolor sit amet, consectetur." },
          { number: three, title: "Outstanding Chef", description: "Lorem ipsum dolor sit amet, consectetur." }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles if needed */
  </style>
  