<script setup>

defineProps({
    title: String,
    icon: {
        type: String,
        default: 'pi-search'
    }
})
</script>

<template>
    <button class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-accent-600 hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500">
        <i :class="`pi ${icon} p-2`"> </i>
        {{ title }}
    </button>
</template>