<template>
    <div class="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg font-serif">
      <h2 class="text-3xl font-semibold text-center mb-6">Book a Table</h2>
  
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block text-gray-700">Full Name</label>
          <input
            v-model="formData.fullName"
            type="text"
            placeholder="Your Name"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input
            v-model="formData.email"
            type="email"
            placeholder="Your Email"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        <div class="mb-4">
          <label class="block text-gray-700">Date</label>
          <input
            v-model="formData.date"
            type="date"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        <div class="mb-4">
          <label class="block text-gray-700">Time</label>
          <input
            v-model="formData.time"
            type="time"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        <div class="mb-4">
          <label class="block text-gray-700">Number of Guests</label>
          <input
            v-model="formData.guests"
            type="number"
            min="1"
            max="10"
            placeholder="Number of Guests"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
  
        <button
          type="submit"
          class="w-full bg-yellow text-black py-2 px-4 rounded-md"
        >
          Book Table
        </button>
      </form>
  
      <!-- Success Modal -->
      <div
        v-if="formSuccess"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div class="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
          <h2 class="text-2xl font-semibold mb-4">Success!</h2>
          <p class="mb-4">Your table has been successfully booked.</p>
          <button
            @click="closeModal"
            class="bg-yellow text-black py-2 px-4 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          fullName: '',
          email: '',
          date: '',
          time: '',
          guests: 1,
        },
        formSuccess: false, // Track form submission success and modal visibility
      };
    },
    methods: {
      submitForm() {
        // You can send this formData to an API or handle it as needed
        console.log("Booking data:", this.formData);
  
        // Simulate a successful submission (you can replace this with an API call)
        this.formSuccess = true;
  
        // Reset the form after submission
        this.resetForm();
      },
      resetForm() {
        this.formData = {
          fullName: '',
          email: '',
          date: '',
          time: '',
          guests: 1,
        };
      },
      closeModal() {
        this.formSuccess = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles */
  </style>
  