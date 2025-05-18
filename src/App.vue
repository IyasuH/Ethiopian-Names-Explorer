<script setup>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import SideBar from './components/SideBar.vue';
import MapExplore from './components/MapExplore.vue';
import Footer from './components/Footer.vue';
import Charts from './components/Charts.vue';
import SearchSection from './components/SearchSection.vue';
import About from './components/About.vue';
</script>

<template>
  <div className="flex min-h-screen flex-col">
    <Header />
    <Hero />
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <SideBar />
        <main class="flex-1">
          <MapExplore />
          <Charts />
          <SearchSection />
          <About />
        </main>
      </div>
    </div>
  </div>
  <Footer />  
</template>

