<template>
    <footer class="bg-black text-white py-8 px-4 font-serif">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left place-items-center">
        
        <!-- Contact Us Section -->
        <div class="leading-8">
          <h2 class="text-lg font-bold mb-3">Contact Us</h2>
          <p>53rd St, New York, NY 10019, USA</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-555-1230</p>
        </div>
        
        <!-- Brand and Social Media Section -->
        <div class="flex flex-col items-center order-1">
          <h1 class="text-3xl font-serif text-yellow font-bold">GERÍCHT</h1>
          <p class="my-4 text-sm">
            "The best way to find yourself is to lose yourself in the service of others."
          </p>
          <div class="flex space-x-4">
            <a href="#"><img src="/public/u_facebook-f.svg" alt=""></a>
            <a href="#"><img src="/public/u_instagram.svg" alt=""></a>
            <a href="#"><img src="/public/u_twitter-alt.svg" alt=""></a>
          </div>
        </div>
        
        <!-- Working Hours Section -->
        <div class="leading-8">
          <h2 class="text-lg font-bold mb-3">Working Hours</h2>
          <p>Monday-Friday <br> <span>08:00 am - 12:00 am</span></p>
          <p>Saturday-Sunday <br> <span>07:00 am - 11:00 pm</span></p>
        </div>
      </div>
  
      <!-- Footer Bottom Section -->
      <div class="text-center mt-8 text-sm">
        <p>2021 Gericht. All Rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
  footer i {
    color: #ffffff;
    transition: color 0.3s;
  }
  footer i:hover {
    color: #ffd700; /* Gold color for hover effect */
  }
  </style>
  