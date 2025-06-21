<script setup>
defineProps({
    card: Object,
    topRegionName: Object,
    unique_region_names_count: Number
})
</script>
<template>
    <div class="bg-white rounded-lg shadow-sm border p-6">
        <div class="flex justify-between">
            <h3 class="text-lg font-semibold text-gray-900">{{ card.title }}</h3>
            <div :class="`text-2xl font-bold ${card.textColor}`">
                {{ unique_region_names_count.toLocaleString() }}
            </div>
        </div>
        <div class="space-y-2">
            <div class="flex text-sm justify-between">
                <span class="text-gray-600">Most Popular:</span>
                <span class="font-medium" v-if="topRegionName">
                    {{ topRegionName.name }} ({{ topRegionName.pop_number.toLocaleString() }})
                </span>
            </div>
            <div class="flex text-sm justify-between">
                <span class="text-gray-600">Diversity Index: </span>
                <span class="font-medium">0.54</span>
            </div>
        </div>
    </div>
</template>