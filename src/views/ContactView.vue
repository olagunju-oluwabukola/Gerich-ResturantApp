<template>
    <div class="container mx-auto font-serif px-4 py-12">
      <!-- Welcome Message / Advertisement Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-6">Welcome to GERÍCHT 👋</h1>
        <p class="text-lg text-gray-700 mb-4">
          At GERÍCHT, we bring you world-class dining combined with exceptional service. Whether you're dining in with us
          or hosting a large event, we ensure an unforgettable experience.
        </p>
        <p class="text-lg text-gray-700 mb-4">
          Here’s a range of services we offer:
        </p>
  
        <!-- Services Table -->
        <div class="overflow-x-auto">
          <table class="table-auto w-full md:w-2/3 mx-auto bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-4 py-2 text-left text-gray-700">Service</th>
                <th class="px-4 py-2 text-left text-gray-700">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-4 py-2">Dine-in Experience</td>
                <td class="border px-4 py-2">$50 per person</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Event Catering</td>
                <td class="border px-4 py-2">$100 per person</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Private Chef Services</td>
                <td class="border px-4 py-2">$200 per hour</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Takeout Orders</td>
                <td class="border px-4 py-2">$25 per meal</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Corporate Events</td>
                <td class="border px-4 py-2">$150 per person</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Weddings & Celebrations</td>
                <td class="border px-4 py-2">Custom pricing</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Custom Meal Plans</td>
                <td class="border px-4 py-2">$300 monthly</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Wine Pairing Events</td>
                <td class="border px-4 py-2">$120 per person</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Cooking Classes</td>
                <td class="border px-4 py-2">$75 per person</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Meal Prep Services</td>
                <td class="border px-4 py-2">$400 monthly</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Seasonal Tasting Menu</td>
                <td class="border px-4 py-2">$150 per person</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Exclusive VIP Dining</td>
                <td class="border px-4 py-2">$500 per person</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
   
  
      <!-- Contact Information & Working Hours -->
      <div class="mt-12 flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12 text-center">
        <!-- Contact Information -->
        <div class="flex-1">
          <h2 class="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p class="text-lg text-gray-600">53rd St, New York, NY 10019, USA</p>
          <p class="text-lg text-gray-600">+1 212-344-1230</p>
          <p class="text-lg text-gray-600">+1 212-555-1230</p>
        </div>
  
        <!-- Working Hours -->
        <div class="flex-1">
          <h2 class="text-3xl font-semibold text-gray-800 mb-4">Working Hours</h2>
          <p class="text-lg text-gray-600">Monday-Friday: 08:00 am - 12:00 am</p>
          <p class="text-lg text-gray-600">Saturday-Sunday: 07:00 am - 11:00 pm</p>
        </div>
      </div>
      
      <div class="mt-8 flex justify-center">
        <iframe
          class="w-full md:w-2/3 h-80 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.910835610504!2d-73.98401608444785!3d40.763798742056524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f669c10b93%3A0xaca9a434bbbc24e1!2s53rd%20St%2C%20New%20York%2C%20NY%2010019%2C%20USA!5e0!3m2!1sen!2sng!4v1694567890165!5m2!1sen!2sng"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactUs",
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1024px;
  }
  </style>
  