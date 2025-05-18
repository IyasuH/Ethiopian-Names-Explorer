<script setup>

defineProps({
    subtitle: String,
    description: String
})
</script>

<template>
    <div class="p-6 border-b border-gray-200">
        <h3 class="font-display font-semibold text_xl text-gray-900">{{ subtitle }}</h3>
        <p class="text-gray-500 mt-1">{{ description }}</p>
    </div>
</template>