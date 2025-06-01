<script setup>
import Logo from './Subcomponents/Logo.vue';
const year = new Date().getFullYear();

</script>
<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div class="flex items-center">
            <Logo />
            <h3 class="ml-2 text-lg font-display font-bold">Ethiopian Names Explorer</h3>
          </div>
          <p class="mt-4 text-gray-400 text-sm">
            An open-source project for exploring Ethiopian naming trends and demographics.
          </p>
        </div>
        
        <div>
          <h3 class="text-lg font-display font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#map" class="text-gray-400 hover:text-white transition-colors">Interactive Map</a></li>
            <li><a href="#charts" class="text-gray-400 hover:text-white transition-colors">Name Charts</a></li>
            <li><a href="#search" class="text-gray-400 hover:text-white transition-colors">Search & Filter</a></li>
            <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">About</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-display font-semibold mb-4">Contact</h3>
          <p class="text-gray-400 text-sm">
            For questions, feedback, or collaboration opportunities, please reach out to us.
          </p>
          <button class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-gray-900 bg-white hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          &copy; {{ year }} Ethiopian Names Explorer. All rights reserved.
        </p>
        <div class="mt-4 md:mt-0 flex space-x-4">
          <a href="https://github.com/IyasuH/Ethiopian-Names-Explorer" class="text-gray-400 hover:text-white">
            <span class="sr-only">GitHub</span>
            <i class="pi pi-github p-2"> </i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <span class="sr-only">Twitter</span>
            <i class="pi pi-twitter p-2"> </i>
          </a>
        </div>
      </div>
    </div>
  </footer>    
</template>