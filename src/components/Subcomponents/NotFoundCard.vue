<script setup>
defineProps({
    title: String,
    desc: String,
    icon: {
        type: String,
        default: 'map'
    },
    main_color: String
})
</script>
<template>
    <div :class="`bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-all duration-300 cursor-pointer group hover:border-${main_color}-200`" onclick="goToSection('map')">
        <div :class="`w-12 h-12 bg-${main_color}-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-${main_color}-200 transition-colors`">
            <i :class="`pi pi-${icon} p-2 text-${main_color}-600`"> </i>
        </div>
        <h4 class="font-semibold text-gray-900 mb-2">{{ title }}</h4>
        <p class="text-sm text-gray-600">{{ desc }}</p>
    </div>
</template>