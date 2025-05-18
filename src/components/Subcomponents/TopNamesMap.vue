<script setup>

defineProps({
    color_number: Number,
    count_number: String,
    person_name: String,
    pop_number: Number
})

</script>

<template>
    <div class="flex items-center py-1">
        <div :class="`w-1 h-6 bg-primary-${color_number} rounded-full mr-2`"></div>
        <div class="flex-1 flex justify-between">
            <span>{{ count_number }}. {{ person_name }}</span>
            <span class="text-gray-500">{{ pop_number }}</span>
        </div>
    </div>

</template>