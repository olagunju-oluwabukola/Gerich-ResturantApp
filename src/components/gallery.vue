<template>
    <section class="bg-black text-white py-12 px-4 font-serif">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
  
        <!-- Left Section: Text Content -->
        <div class="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
          <h3 class="text-sm uppercase text-yellow">Instagram</h3>
          <h1 class="text-4xl font-serif text-yellow">Photo Gallery</h1>
          <p class="text-gray-400 mt-4 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <button class="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600 transition">
            View More
          </button>
        </div>
  
        <!-- Right Section: Image Carousel -->
        <div class="md:w-2/3 overflow-hidden relative">
          <!-- Images Wrapper -->
          <div
            ref="carousel"
            class="flex transition-transform duration-700 ease-out"
            :style="{ transform: `translateX(-${currentIndex * slideWidth}%)` }"
          >
            <!-- Render Images Dynamically -->
            <div
              v-for="(image, index) in images"
              :key="index"
              class="flex-none w-full sm:w-1/2 lg:w-1/4 p-2"
            >
              <img :src="image" alt="Gallery Image" class="rounded-lg object-cover w-full h-64" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
  import img1 from '/tangine.svg'
  import img2 from '/snoek.svg'
  import img3 from '/3.svg'
  import img4 from '/baobab juice.svg'
  import img5 from '/egusi soup.svg'
  import img6 from '/asun.svg'
  import img7 from '/kelewele.svg'
  import img8 from '/Small imageLanding page.svg'
  export default {
    name: 'PhotoGallery',
    setup() {
      const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
      ];
  
      const currentIndex = ref(0);
      const interval = ref(null);
  
      // Calculate slide width based on screen size
      const slideWidth = computed(() => {
        if (window.innerWidth < 640) return 100; // 1 image for small screens
        if (window.innerWidth < 1024) return 50;  // 2 images for medium screens
        return 25; // 4 images for large screens
      });
  
      const startCarousel = () => {
        interval.value = setInterval(() => {
          currentIndex.value = (currentIndex.value + 1) % images.length;
  
          // Reset when reaching the end of the array
          if (currentIndex.value > images.length - (100 / slideWidth.value)) {
            currentIndex.value = 0;
          }
        }, 3000); // Change slide every 3 seconds
      };
  
      const pauseCarousel = () => {
        clearInterval(interval.value);
      };
  
      onMounted(() => {
        startCarousel(); // Start the carousel when the component is mounted
  
        // Handle resizing to adjust slide width
        window.addEventListener('resize', pauseCarousel);
        window.addEventListener('resize', startCarousel);
      });
  
      onBeforeUnmount(() => {
        pauseCarousel(); // Clear interval when the component is destroyed
        window.removeEventListener('resize', pauseCarousel);
        window.removeEventListener('resize', startCarousel);
      });
  
      return { images, currentIndex, slideWidth };
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles if necessary */
  </style>
  