<script setup>

defineProps({
    section_name: String,
    section_color: String
})
</script>
<template>
    <div class="flex items-center mb-6">
        <div :class="`h-8 w-2 ${section_color} rounded-full mr-3`"></div>
        <h2 class="text-2xl font-display font-bold text-gray-900">{{ section_name }}</h2>
    </div>
</template>