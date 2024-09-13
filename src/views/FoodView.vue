<template>
    <div class="p-6 max-w-4xl mx-auto bg-white rounded shadow-md">
      <div v-if="food" class="flex flex-col lg:flex-row">
        
        <div class="lg:w-1/2 flex-shrink-0">
          <img
            :src="food.strMealThumb"
            :alt="food.strMeal"
            class="rounded-lg w-full object-cover"
          />
        </div>
  
 
        <div class="lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
          <h1 class="text-2xl font-bold mb-4">{{ food.strMeal }}</h1>
  
         
          <h2 class="text-xl font-semibold mb-2">Ingredients</h2>
          <table class="w-full border border-collapse">
            <thead>
              <tr>
                <th class="border px-4 py-2">Ingredient</th>
                <th class="border px-4 py-2">Measure</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(ingredient, index) in ingredients" :key="index">
                <td class="border px-4 py-2">{{ ingredient }}</td>
                <td class="border px-4 py-2">{{ measures[index] }}</td>
              </tr>
            </tbody>
          </table>
  
        
          <h2 class="text-xl font-semibold mt-6 mb-2">Instructions</h2>
          <p class="text-justify">{{ food.strInstructions }}</p>
        </div>
      </div>
  
      <div v-else>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <p v-else>Loading food details...</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'FoodDetail',
    data() {
      return {
        food: null,
        ingredients: [],
        measures: [],
        errorMessage: '', 
      };
    },
    props: ['idMeal'],
    created() {
      console.log('Received idMeal:', this.idMeal); 
      this.fetchFoodDetail();
    },
    methods: {
      async fetchFoodDetail() {
        if (!this.idMeal) {
          this.errorMessage = 'Invalid meal ID provided.';
          return;
        }
  
        try {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.idMeal}`
          );
  
          console.log('API Response:', response.data); 
  
          if (response.data.meals) {
            this.food = response.data.meals[0];
            this.extractIngredientsAndMeasures();
          } else {
            console.error('No food found for this ID:', this.idMeal);
            this.errorMessage = 'No details found for this meal.';
          }
        } catch (error) {
          console.error('Error fetching food details:', error);
          this.errorMessage = 'An error occurred while fetching food details. Please try again later.';
        }
      },
      extractIngredientsAndMeasures() {
        
        for (let i = 1; i <= 20; i++) {
          const ingredient = this.food[`strIngredient${i}`];
          const measure = this.food[`strMeasure${i}`];
          if (ingredient && ingredient.trim()) {
            this.ingredients.push(ingredient);
            this.measures.push(measure);
          }
        }
      },
    },
  };
  </script>
  