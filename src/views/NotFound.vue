<script setup>
import { RouterLink } from 'vue-router';
import NotFoundCard from '../components/Subcomponents/NotFoundCard.vue';
</script>

<template>
    <main class="flex-1 flex items-center justify-center relative">
    <div class="floating-shapes">
      <div class="shape w-32 h-32 bg-primary-400 rounded-full"></div>
      <div class="shape w-24 h-24 bg-secondary-400 rounded-lg transform rotate-45"></div>
      <div class="shape w-40 h-40 bg-accent-400 rounded-full"></div>
      <div class="shape w-28 h-28 bg-primary-300 rounded-lg transform rotate-12"></div>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- 404 Number -->
      <div class="animate-fade-in">
        <h1 class="text-9xl md:text-[12rem] font-bold gradient-text mb-4">
          404
        </h1>
      </div>

      <!-- Main Message -->
      <div class="animate-slide-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Oops! This name seems to be missing
        </h2>
        <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Just like some rare Ethiopian names, this page has wandered off our map. 
          Let's help you find your way back to exploring our rich naming heritage.
        </p>
      </div>

      <!-- Ethiopian-themed Message -->
      <div class="bg-gradient-to-r from-accent-50 to-accent-100 rounded-xl p-6 md:p-8 border border-accent-200 mb-8 animate-slide-up">
        <div class="flex items-center justify-center mb-4">
          <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center">
            <i class="pi pi-lightbulb px-2 text-accent-600" > </i>
          </div>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          🇪🇹 Did you know?
        </h3>
        <p class="text-gray-700">
          In Ethiopian culture, names carry deep meaning and tell stories. While this page may be lost, 
          there are thousands of beautiful Ethiopian names waiting to be discovered in our explorer!
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
        <RouterLink to="/">
            <button 
            class="bg-primary-500 hover:bg-primary-400 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
            >
                <i class="pi pi-home px-2"> </i>
            Return Home
            </button>
        </RouterLink>

        <RouterLink to="/#search">
            <button 
            class="bg-transparent border-2 border-secondary-500 text-secondary-600 hover:bg-secondary-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center"
            >
                <i class="pi pi-search px-2 "> </i>
            Explore Names
            </button>
        </RouterLink>
      </div>

      <!-- Popular Suggestions -->
      <div class="mt-12 animate-slide-up">
        <h3 class="text-lg font-semibold text-gray-900 mb-6">
          Or explore these popular sections:
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <!-- Interactive Map -->
          <RouterLink to="/#map">
            <NotFoundCard 
                title="Interactive Map"
                desc="Explore name distributions across Ethiopian regions"
                icon="map"
                main_color="primary"
            />
          </RouterLink>

          <!-- Name Charts -->
          <RouterLink to="/#charts">
           <NotFoundCard 
            title="Name Charts"
            desc="Discover the most popular Ethiopian names"
            icon="chart-bar"
            main_color="secondary"
            />
          </RouterLink>

          <!-- Search & Filter -->
         <RouterLink to="/#search">
           <NotFoundCard 
            title="Search & Filter"
            desc="Find specific names and their meanings"
            icon="search"
            main_color="accent"
            />
         </RouterLink>
        </div>
      </div>

      <!-- Fun Fact -->
      <div class="mt-12 p-6 bg-white rounded-lg shadow-sm border max-w-2xl mx-auto animate-slide-up border-l-4 border-l-primary-500 mb-5">
        <div class="flex items-center justify-center mb-4">
          <div class="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center animate-wiggle">
            <span class="text-accent-600 text-lg">💡</span>
          </div>
        </div>
        <h4 class="font-semibold text-gray-900 mb-2">Fun Fact</h4>
        <p class="text-gray-600 text-sm">
          Ethiopian names often reflect the circumstances of birth, family hopes, or religious beliefs. 
          The name "Abebe" (meaning "flower") is one of the most common given names in Ethiopia!
        </p>
      </div>

    </div>
</main>
</template>
<style>
.gradient-text {
    background: linear-gradient(135deg, #0ea5e9, #0284c7, #0369a1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.floating-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
}
.shape {
    position: absolute;
    opacity: 0.1;
    animation: float 6s ease-in-out infinite;
}

.shape:nth-child(1) {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
}

.shape:nth-child(2) {
    top: 20%;
    right: 10%;
    animation-delay: 2s;
}

.shape:nth-child(3) {
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
}

.shape:nth-child(4) {
    bottom: 10%;
    right: 20%;
    animation-delay: 1s;
}    
</style>