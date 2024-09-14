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
          :class="emailError ? 'border-red-500' : ''"
          @blur="validateEmail"  
          required
        />
      
        <p v-if="emailError" class="text-red-500 text-sm">Please enter a valid email address.</p>
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
        class="w-full bg-yellow text-black py-2 px-4 rounded-md flex items-center justify-center"
        :disabled="loading || emailError" 
      >
        <span v-if="loading" class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black mr-2"></span>
        {{ loading ? 'Booking...' : 'Book Table' }}
      </button>
    </form>

    <div
      v-if="formSuccess"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
        <h2 class="text-2xl font-semibold mb-4">
          🎉 Success! <span class="ml-2">😊</span>
        </h2>
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
import { db } from "@/fb";
import { collection, addDoc } from "firebase/firestore"; 

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
      formSuccess: false,
      loading: false,
      emailError: false,  
    };
  },
  methods: {
    async submitForm() {
      if (!this.validateEmail()) return; 

      this.loading = true; 

      try {
        const bookingsRef = collection(db, "Booking");

     
        await addDoc(bookingsRef, {
          fullName: this.formData.fullName,
          email: this.formData.email,
          date: this.formData.date,
          time: this.formData.time,
          guests: this.formData.guests,
          bookedAt: new Date(),
        });

        this.formSuccess = true;
        this.resetForm();
      } catch (error) {
        console.error("Error saving booking:", error);
      } finally {
        this.loading = false; 
      }
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.formData.email)) {
        this.emailError = true;  
        return false;
      }
      this.emailError = false;  
      return true;
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

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
