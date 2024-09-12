<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex flex-col items-center bg-black text-white py-10 px-4 font-serif">
      <div class="w-full md:max-w-7xl text-center">
        <h3 class="text-sm font-semibold uppercase mb-2">Newsletter</h3>
        <h2 class="text-4xl font-bold mb-4">Subscribe To Our Newsletter</h2>
        <p class="text-gray-400 mb-6">And never miss latest updates!</p>
  
        <!-- Subscription Form -->
        <div class="flex justify-center">
          <input
            type="email"
            v-model="email"
            placeholder="Email Address"
            class="px-4 py-2 w-72 md:w-96 rounded-l-md border-1 border-yellow focus:outline-yellow"
          />
          <button
            @click="subscribe"
            class="bg-yellow text-black font-semibold py-2 px-6 rounded-r-md"
          >
            Subscribe
          </button>
        </div>
  
        <p v-if="message" class="mt-4 text-green-500">{{ message }}</p>
        <p v-if="errorMessage" class="mt-4 text-red-500">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
import {db} from "@/fb"
  
  export default {
    data() {
      return {
        email: '',
        message: '',
        errorMessage: ''
      };
    },
    methods: {
      async subscribe() {
        if (this.validateEmail(this.email)) {
          try {
            await db.collection('subscribers').add({
              email: this.email,
              subscribedAt: new Date()
            });
            this.message = 'Thank you for subscribing!';
            this.errorMessage = '';
            this.email = ''; // Clear email field
          } catch (error) {
            this.errorMessage = 'Failed to subscribe. Please try again.';
          }
        } else {
          this.errorMessage = 'Please enter a valid email address.';
        }
      },
      validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
      }
    }
  };
  </script>
  