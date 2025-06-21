<script setup>
import NavButton from './NavButton.vue';

defineProps({
    card: Object,
    rareNames: Array,
    currentPage: Number,
    totalNoPages: Number,
    previousPage: Function,
    nextPage: Function
})
</script>
<template>
    <div class="bg-white rounded-lg shadow-sm border p-6">
        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
                <div :class="`w-10 h-10 ${card.iconBgColor} rounded-lg flex items-center justify-center mr-3`">
                    <i :class="`pi ${card.icon} w-6 h-6 ${card.iconColor}`"></i>
                </div>
                <h3 class="text-lg font-semibold text-gray-900">{{ card.title }}</h3>
            </div>
        </div>
        
        <div class="space-y-3 mb-6" id="rare-given-names" v-for="(rareName, index) in rareNames" :key="index">
            <div class="name-card p-3 rounded-lg border border-gray-200 transition-all duration-200 hover:shadow-md">
                <div class="flex items-center justify-between">
                    <span class="font-medium text-gray-900">{{ rareName.name }}</span>
                    <span :class="`text-xs ${card.textColor} ${card.iconBgColor} px-2 py-1 rounded-full`">{{ rareName.frequency }} occurrence</span>
                </div>
                <p class="text-xs text-gray-500 mt-1">Meaning: </p>
            </div>
        </div>
        
        <!-- Pagination Controls -->
        <div class="flex items-center justify-between pt-4 border-t border-gray-200">
            <NavButton title="Previous" @click="previousPage()"/>
            <span class="text-sm text-gray-500">Page {{ currentPage }} of {{ totalNoPages }}</span>
            <NavButton title="Next" @click="nextPage()"/>
        </div>
    </div>
</template>
