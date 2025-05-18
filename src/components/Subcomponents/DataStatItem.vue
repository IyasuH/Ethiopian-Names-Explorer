<script setup>

defineProps({
    title: String,
    content: String
})

</script>
<template>
    <div class="flex justify-between items-center">
        <span class="text-gray-600">{{ title }}</span>
        <span class="font-semibold">{{ content }}</span>
    </div>
</template>