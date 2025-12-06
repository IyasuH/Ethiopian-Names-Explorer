<script setup>
import Logo from './Subcomponents/Logo.vue';
import { RouterLink } from 'vue-router';
</script>
<template>
    <header class="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm backdrop-blur-sm bg-white/95">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
            <div class="flex-shrink-0">
                <RouterLink to="/" class="transition-transform duration-200 hover:scale-110 inline-block"><Logo/></RouterLink>
            </div>
            <div class="ml-4">
                <RouterLink to="/" class="transition-colors duration-200 hover:text-primary-600">
                    <h1 class="text-xl font-display font-bold text-gray-900">Ethiopian Names Explorer</h1>
                </RouterLink>
            </div>
        </div>
        <p class="hidden md:block text-sm text-gray-500">
            Discover Naming Trends and Demographics in Ethiopia
        </p>
        </div>
    </div>
    </header>

</template>