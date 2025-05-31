<script setup>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import SideBar from './components/SideBar.vue';
import MapExplore from './components/MapExplore.vue';
import Footer from './components/Footer.vue';
import Charts from './components/Charts.vue';
import SearchSection from './components/SearchSection.vue';
import About from './components/About.vue';
import { getCityFrequency, countUniqueNames } from './services/api';

import { onMounted, ref } from 'vue';

const city_freq = ref([]);
const total_population = ref(100000);
const number_citites = ref(0);
const number_regions = ref(11)
const unique_names_count = ref(0);

onMounted(async () => {
  try {
    city_freq.value = await getCityFrequency()
    const unique_names_count_ = await countUniqueNames(); 
    unique_names_count.value = unique_names_count_.items;
    console.log(`Unique names count: ${unique_names_count.value}`);
    for (let city in city_freq.value) {
      total_population.value += city_freq.value[city];
    }
    number_citites.value = Object.keys(city_freq.value).length;

  } catch (err) {
    console.error(`Failed to load map data, ${err}`);
  }
});

const getCoords = (city) => {
  return cityCoords[city] || [9.145, 40.4897]; // Fallback to Ethiopia center
};

</script>

<template>
  <div className="flex min-h-screen flex-col">
    <Header />
    <Hero 
      :total_population=total_population
    />
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <SideBar 
          :total_population="total_population"
          :unique_names_count="unique_names_count"
          :number_citites="number_citites"
          :number_regions="number_regions"
        />
        <main class="flex-1">
          <MapExplore />
          <Charts 
            :total_population="total_population"
          />
          <SearchSection />
          <About />
        </main>
      </div>
    </div>
  </div>
  <Footer />  
</template>

