<script setup>
import { ref } from "vue"
import DataStatItem from "./Subcomponents/DataStatItem.vue";


defineProps({
    total_population: {
        type: Number,
        default: 0
    },
    number_citites: {
        type: Number,
        default: 0
    },
    number_regions: {
        type: Number,
        default: 11
    },
    unique_names_count: {
        type: Number,
        default: 0
    },
    sections: {
        type: Array,
        default: []
    },
    page_: {
        type: String,
        default: 'home'
    }
})
const activeSection = ref('map');

const changeActive = (active) => {
        activeSection.value = active
}

</script>
<template>
    <aside class="lg:w-64 flex-shrink-0">
        <div class="sticky top-20">
          <div class="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200" v-if="page_ === 'regions'">
                <h2 class="text-lg font-semibold text-yellow-800 mb-2">{{ $route.params.region_name }}</h2>
                <div class="text-sm text-yellow-700">
                    <div class="flex justify-between mb-1">
                        <span>Population:</span>
                    <span class="font-medium">{{ total_population.toLocaleString() }}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Cities:</span>
                        <span class="font-medium">{{ number_citites }}</span>
                    </div>
                </div>
            </div>
          
            <nav class="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 class="font-display font-semibold text-lg mb-4 text-gray-900">Navigation</h3>
                <ul class="space-y-2">
                    <li v-for="section in sections" :key="section.id">
                      <a :href="`#${section.id}`" @click="changeActive(section.id)" :class="['flex items-center px-4 py-2 rounded-lg font-medium', 
                        activeSection === section.id 
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-gray-700 hover:bg-gray-100'
                        ]">
                          <i :class="`pi pi-${section.icon} p-2`"> </i>
                          {{ section.label }}
                      </a>
                    </li>
                </ul>
            </nav>
            
            <div class="bg-white rounded-xl shadow-sm p-6" v-if="page_ === 'home'">
                <h3 class="font-display font-semibold text-lg mb-4 text-gray-900">Dataset Stats</h3>
                <div class="space-y-4">
                        <DataStatItem title="Total Records" :content="`${total_population.toLocaleString()}`"/>
                        <DataStatItem title="Unique Names" :content="`${unique_names_count.toLocaleString()}`"/>
                        <DataStatItem title="Regions" :content="`${number_regions}`"/>
                        <DataStatItem title="Cities" :content="`${number_citites}`"/>
                </div>
            </div>
        </div>
    </aside>        
</template>