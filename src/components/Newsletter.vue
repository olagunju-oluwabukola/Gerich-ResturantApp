<template>
  <div class="flex flex-col items-center bg-black text-white py-10 px-4 font-serif">
    <div class="w-full md:max-w-7xl text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4 text-yellow">Subscribe To Our Newsletter</h2>
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
import { db } from "@/fb";
import { collection, addDoc } from "firebase/firestore";  // Import Firestore methods

export default {
  data() {
    return {
      email: "",
      message: "",
      errorMessage: ""
    };
  },
  methods: {
    async subscribe() {
      if (this.validateEmail(this.email)) {
        try {
          const newsletterRef = collection(db, "newsletter");  // Define the collection reference
          await addDoc(newsletterRef, {
            email: this.email,
            subscribedAt: new Date()
          });
          this.message = "Thank you for subscribing!";
          this.errorMessage = "";
          this.email = ""; // Clear input field
          
          // Clear success message after 5 seconds
          setTimeout(() => {
            this.message = "";
          }, 5000);
          
        } catch (error) {
          this.errorMessage = "Failed to subscribe. Please try again.";
          
          // Clear error message after 5 seconds
          setTimeout(() => {
            this.errorMessage = "";
          }, 5000);
        }
      } else {
        this.errorMessage = "Please enter a valid email address.";

        // Clear error message after 5 seconds
        setTimeout(() => {
          this.errorMessage = "";
        }, 2000);
      }
    },
    validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  }
};
</script>
