<script setup>

defineProps({
  total_population: Number
})

</script>
<template>
  <section class="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">Explore Ethiopian Names</h2>
        <p class="text-lg text-primary-100 mb-8">
          Discover patterns, trends, and insights from our dataset of {{ total_population.toLocaleString() }} Ethiopian names
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="#map" class="bg-white text-primary-700 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105">
            Explore Map
          </a>
          <a href="#search" class="bg-primary-600 text-white hover:bg-primary-500 px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-primary-500 hover:shadow-lg hover:scale-105">
            Search Names
          </a>
        </div>
      </div>
    </div>
  </section>    
</template>