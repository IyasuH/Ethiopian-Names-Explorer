<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import NameCard from './Subcomponents/NameCard.vue';
const route = useRoute();
const regions_name = route.params.region_name;

const props = defineProps({
    region_population: Number,
    city_freq: Array,
    unique_region_names_count: Number,
    unique_region_father_names_count: Number,
    unique_region_grand_father_names_count: Number
})

const cards = ref([
    {
        title: "Total Population",
        icon: "pi-users",
        color: "bg-blue-100",
        textColor: "text-blue-600"
    },
    {
        title: "Unique Given Names",
        icon: "pi-file-check",
        color: "bg-green-100",
        textColor: "text-green-600"
    },
    {
        title: "Unique Father Names",
        icon: "pi-user",
        color: "bg-purple-100",
        textColor: "text-purple-600"
    },
    {
        title: "Unique Grandfather Names",
        icon: "pi-heart",
        color: "bg-orange-100",
        textColor: "text-orange-600"
    }
])


const city_description = [
    "Regional capital", "Major city", 
]


console.log(`city freq ${props.city_freq}`)

</script>
<template>
    <section id="map">
        <h2 class="text-2xl font-semibold mb-6">Regional Overview</h2>
        
        <!-- Key Statistics Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <NameCard 
             :card="cards[0]"
             :region_population="region_population"
            />

            <NameCard 
             :card="cards[1]"
             :region_population="unique_region_names_count"
            />

            <NameCard 
             :card="cards[2]"
             :region_population="unique_region_father_names_count"
            />
            
            <NameCard 
             :card="cards[3]"
             :region_population="unique_region_grand_father_names_count"
            />        
        </div>

        <!-- Cities Breakdown -->
        <div class="bg-white rounded-lg shadow-sm border p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Cities in {{ regions_name }} Region</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg"  v-for="(city, index) in city_freq" :key="index">
                <div>
                <h4 class="font-medium text-gray-900">{{ city.name }}</h4>
                <p class="text-sm text-gray-500">{{ city_description[index] }}</p>
                </div>
                <div class="text-right">
                <div class="text-lg font-semibold text-gray-900">{{ city.pop_number.toLocaleString() }}</div>
                <div class="text-xs text-gray-500">people in dataset</div>
                </div>
            </div>
        </div>
        </div>
    </section>    
</template>