<script setup>

defineProps({
    topRegionNames: Array,
    card: Object
})
</script>
<template>
    <div class="bg-white rounded-lg shadow-sm border p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Top {{ card.title }}</h3>
        <div class="space-y-3">
            <div :class="`flex items-center justify-between p-3 bg-gray-50 rounded-lg`" v-for="(topRegionName, index) in topRegionNames" :key="index">
                <div class="flex items-center">
                    <span v-if="index === 0" :class="`w-6 h-6 ${card.bgColor} text-white text-xs font-bold rounded-full flex items-center justify-center mr-3`">
                        {{ index + 1 }}
                    </span>
                    <span v-else class="w-6 h-6 bg-gray-400 text-white text-xs font-bold rounded-full flex items-center justify-center mr-3">
                        {{ index + 1}}
                    </span>
                    <span class="font-medium">{{ topRegionName.name }}</span>
                </div>
                <span v-if="index === 0" :class="`text-sm font-semibold ${card.textColor}`">
                    {{ topRegionName.pop_number.toLocaleString() }}
                </span>
                <span v-else class="text-sm font-semibold text-gray-600">
                    {{ topRegionName.pop_number.toLocaleString() }}
                </span>
            </div>
        </div>
    </div>
</template>