<script setup>
import Hero from '../components/Hero.vue';
import SideBar from '../components/SideBar.vue';
import MapExplore from '../components/MapExplore.vue';

import Charts from '../components/Charts.vue';
import SearchSection from '../components/SearchSection.vue';
import About from '../components/About.vue';
import { getCityFrequency, countUniqueNames } from '../services/api';

import { onMounted, ref } from 'vue';

const city_freq = ref([]);
const total_population = ref(0);
const number_citites = ref(0);
const number_regions = ref(11)
const unique_names_count = ref(0);

const sections_ = [
    {id: 'map', label: 'Interactive Map', icon: 'map'},
    {id: 'charts', label: 'Name Charts', icon: 'chart-bar'},
    {id: 'search', label: 'Search & Filter', icon: 'search'},
    {id: 'about', label: 'About', icon: 'info-circle'}
]

onMounted(async () => {
  try {
    console.log("Loading map data...");
    city_freq.value = await getCityFrequency()
    const unique_names_count_ = await countUniqueNames(); 
    unique_names_count.value = unique_names_count_.items;
    
    for (let city in city_freq.value) {
      total_population.value += city_freq.value[city];
    }
    number_citites.value = Object.keys(city_freq.value).length;

  } catch (err) {
    console.error(`Failed to load map data, ${err}`);
  }
});

</script>
<template>
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
        :sections="sections_"
      />
      <main class="flex-1">
        <MapExplore />
        <Charts 
          :total_population="total_population"
        />
        <SearchSection />
        <About 
          :total_population="total_population"
        />
      </main>
    </div>
  </div>
</template>