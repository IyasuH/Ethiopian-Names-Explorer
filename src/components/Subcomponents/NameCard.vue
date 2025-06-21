<script setup>
defineProps({
    card: Object,
    region_population: Number
})
</script>
<template>
    <div class="stat-card bg-white rounded-lg shadow-sm border p-6 text-center counter-animation" >
        <div :class="`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center mx-auto mb-4`">
            <i :class="`pi ${card.icon} w-6 h-6 ${card.textColor}`"> </i>
        </div>
        <div class="text-3xl font-bold text-gray-900 mb-2">{{ region_population.toLocaleString() }}</div>
        <div class="text-sm text-gray-500">{{ card.title }}</div>
    </div>
</template>