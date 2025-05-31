<script setup>

defineProps({
    name: String,
    count: String,
    percent: Number
})
</script>

<template>

    <div class="flex items-center mb-2">
        <div class="w-20 text-right pr-4 text-sm text-gray-600">{{ name }}</div>
        <div class="flex-1">
        <div class="h-6 bg-secondary-500 rounded-r-full" :style="`width: ${percent}%`"></div>
        </div>
        <div class="w-16 text-left pl-4 text-sm font-medium">{{ count }}</div>
    </div>

</template>