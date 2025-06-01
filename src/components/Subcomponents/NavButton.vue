<script setup>

defineProps({
    title: String,
})
</script>

<template>
    <button class="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
    {{ title }}
    </button>
</template>