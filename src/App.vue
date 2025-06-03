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
import { useHead } from '@vueuse/head';

import { onMounted, ref } from 'vue';

const city_freq = ref([]);
const total_population = ref(0);
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

useHead({
  title: 'Ethiopian Names Explorer',
  meta: [
  { charset: 'UTF-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'title', content: 'Ethiopian Names Explorer - Discover Unique Names' },
    {
      name: 'description',
      content:
        'Explore authentic Ethiopian names inspired by rich cultural heritage. Perfect for parents, writers, and cultural enthusiasts seeking unique African names.',
    },
    {
      name: 'keywords',
      content: 'Ethiopian names, Amharic names, baby names, African names, cultural names, unique names',
    },
    { name: 'author', content: 'Your Name' },
    { name: 'robots', content: 'index, follow' },
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://ethiopian-names-explorer.vercel.app/' },
    { property: 'og:title', content: 'Ethiopian Names Explorer - Discover Unique Names' },
    {
      property: 'og:description',
      content: 'Discover authentic Ethiopian names inspired by rich cultural heritage for naming inspiration.',
    },
    { property: 'og:image', content: 'https://ethiopian-names-explorer.vercel.app/og-image.png' },
    { property: 'og:site_name', content: 'Ethiopian Names Explorer' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: 'https://ethiopian-names-explorer.vercel.app/' },
    { name: 'twitter:title', content: 'Ethiopian Names Explorer - Discover Unique Names' },
    {
      name: 'twitter:description',
      content: 'Discover authentic Ethiopian names inspired by rich cultural heritage for naming inspiration.',
    },
    { name: 'twitter:image', content: 'https://ethiopian-names-explorer.vercel.app/og-image.png' }
  ],
  title: 'Ethiopian Names Explorer - Discover Unique Names',
});

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
          <About 
            :total_population="total_population"
          />
        </main>
      </div>
    </div>
  </div>
  <Footer />  
</template>

