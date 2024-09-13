<template>
  <nav class="bg-gray-100 p-4 overflow-x-auto whitespace-nowrap">
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <li
        v-for="category in categories"
        :key="category.strCategory"
        class="cursor-pointer px-4 w-32 py-2 bg-white shadow-md rounded hover:bg-gray-200"
        @click="navigateToCategory(category.strCategory)"
      >
        {{ category.strCategory }}
      </li>
    </ul>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        this.categories = response.data.categories;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    navigateToCategory(idMeal) {
      this.$router.push({ name: 'FoodDetail', params: { idMeal } }); 
    },
  },
};
</script>
