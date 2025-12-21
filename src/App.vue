<script setup>
import Header from './components/Header.vue';

import Footer from './components/Footer.vue';
import AssistantChat from './components/AssistantChat.vue';

import { useHead } from '@unhead/vue';
import { RouterView } from 'vue-router';

useHead({
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
  <div class="flex min-h-screen flex-col">
    <Header />
    <RouterView />
    <AssistantChat />
    <Footer />
  </div>
</template>

