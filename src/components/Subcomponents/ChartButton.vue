<script setup>

defineProps({
    text_color: {
        type: String,
        default: "text-gray-500"
    },
    border_style: {
        type: String,
        default: "border-transparent"
    },
    hover: {
        type: String,
        default: ""
    },
    button_text: {
        type: String
    }
})
</script>
<template>
    <button :class="`px-6 py-3 border-b-2 ${border_style} ${text_color} hover:${hover} font-medium`">
        {{ button_text }}
    </button>    
</template>