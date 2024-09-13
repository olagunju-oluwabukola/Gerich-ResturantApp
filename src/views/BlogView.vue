<!-- src/views/BlogView.vue -->
<template>
    <div class="p-6 max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold text-center mb-8 font-serif">Our Blog</h1>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(post, index) in blogPosts" :key="index" class="bg-white rounded shadow-lg overflow-hidden">
          <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover">
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2 font-serif">{{ post.title }}</h2>
            <p class="text-gray-600 text-sm mb-4 font-serif">by {{ post.author }}</p>
            <p class="text-gray-700 text-justify font-serif">{{ post.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogView',
    data() {
      return {
        blogPosts: [
          {
            title: "The Secret Ingredients of Our Famous Pizza",
            author: "Chef Mario Rossi",
            image: "https://th.bing.com/th/id/OIP.L9sfgafZ8aat11w3xeDgyAHaEK?rs=1&pid=ImgDetMain",
            content: "Our famous pizza starts with a special dough recipe passed down for generations. Each ingredient is carefully selected to ensure the best quality and flavor. From the hand-picked tomatoes for our sauce to the fresh herbs grown in our garden, we take pride in delivering an authentic Italian pizza experience."
          },
          {
            title: "Why Fresh Ingredients Make a Difference",
            author: "Chef Anna Conti",
            image: "https://th.bing.com/th/id/OIP._ASl373YkxvaIz6TIED-yQHaE8?rs=1&pid=ImgDetMain",
            content: "At our restaurant, we believe that the quality of ingredients directly impacts the taste of our dishes. That's why we only use the freshest, locally sourced produce. From farm to table, every dish is crafted with care, ensuring a burst of flavor in every bite."
          },
          {
            title: "The Art of Perfect Pasta",
            author: "Chef Luca Bianchi",
            image: "https://th.bing.com/th/id/OIP.ESwccZWHWwGaXdAp5lWvFwHaE7?rs=1&pid=ImgDetMain",
            content: "Pasta is an art, and making it perfect requires precision and passion. We make our pasta from scratch daily, using only the finest flour and eggs. Our chefs are trained in the traditional methods of pasta-making, ensuring each dish is cooked to perfection."
          },
          {
            title: "A Journey Through Italian Desserts",
            author: "Chef Giulia Romano",
            image: "https://th.bing.com/th/id/OIP.iiHn9ku46aFlZ9LkSv2BUgHaE8?rs=1&pid=ImgDetMain",
            content: "Italian desserts are known for their rich flavors and textures. From Tiramisu to Cannoli, each dessert tells a story of tradition and culture. Join us on a sweet journey and discover the secrets behind some of the most beloved Italian desserts."
          },
          {
            title: "The Evolution of Our Wine List",
            author: "Sommelier Marco Di Stefano",
            image: "https://th.bing.com/th/id/OIP._9xHSnRfnXAXIqXEavVD8gHaEQ?rs=1&pid=ImgDetMain",
            content: "Our wine list is a curated selection of the best wines from Italy and around the world. Over the years, we have built relationships with winemakers to bring you exclusive and rare selections. Whether you are a connoisseur or a casual enthusiast, there's something for everyone."
          },
          {
            title: "Cooking with Passion: Behind the Scenes",
            author: "Chef Carlo Russo",
            image: "https://newsnetwork.mayoclinic.org/n7-mcnn/7bcc9724adf7b803/uploads/2018/09/shutterstock_656846086-768x512.jpg",
            content: "Step into our kitchen and experience the passion that drives our chefs. From the early morning preparation to the final plating, every step is infused with love and dedication. Our chefs believe that cooking is not just a job but a way of life."
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #ff6f61; /* Customize the title color */
  }
  </style>
  