<script setup>
import { useRoute } from 'vue-router';
import SideBar from '../components/SideBar.vue';
import RegionalOverview from '../components/RegionalOverview.vue';
import NameDemography from '../components/NameDemography.vue';
import RareNames from '../components/RareNames.vue';
import region_cities from '../assets/region_cities.json';
import { ref, onMounted } from 'vue';
import { getTopCityFatherNames, 
    getTopCityNames, 
    getTopCityGrandFatherNames, 
    getCityFrequency
 } from '../services/api';

const sections_ = [
    {id: 'map', label: 'Regional Overview', icon: 'clipboard'},
    {id: 'demographics', label: 'Name Demographics', icon: 'chart-bar'},
    {id: 'rare-names', label: 'Rare Names', icon: 'book'},
    {id: 'insights', label: 'Cultural Insights', icon: 'lightbulb'}
]
const route = useRoute();
// const city_freq = ref([]);
const selected_city_freq = ref([]);
const region_population = ref(0);
const topRegionNames = ref([]);
const uniqueRegionNamesCount = ref(0);
const topRegionFatherNames = ref([]);
const uniqueRegionFatherNamesCount = ref(0);
const topRegionGrandFatherNames = ref([]);
const uniqueRegionGrandFatherNamesCount = ref(0);
const regions_name = route.params.region_name;
const cities = region_cities[regions_name] || [];


onMounted(async () => {
    await fetchPopRegionCities();
    await fetchTopRegionNames();
    await fetchTopRegionFatherNames();
    await fetchTopRegionGrandFatherNames();
});

const fetchPopRegionCities = async () => {
    const city_freq = await getCityFrequency()
    selected_city_freq.value = [];
    region_population.value = 0;
    for (let city of cities) {
        if (city_freq[city]) {
            selected_city_freq.value.push({
                name: city,
                pop_number: city_freq[city]
            });
            region_population.value += city_freq[city];
        }
    }
    selected_city_freq.value.sort((a, b) => b.pop_number - a.pop_number);
};

const fetchTopRegionNames = async () => {
    topRegionNames.value = [];
    uniqueRegionNamesCount.value = 0;
    for (let city of cities) {
        const top_names = await getTopCityNames(city, 5);
        uniqueRegionNamesCount.value += top_names.total;
        for (let top_name of top_names.formatted) {
            topRegionNames.value.push({
                name: top_name.name,
                pop_number: top_name.count || 0
            });
        }
        topRegionNames.value.sort((a, b) => b.pop_number - a.pop_number);
    }
};

const fetchTopRegionFatherNames = async () => {
    topRegionFatherNames.value = [];
    uniqueRegionFatherNamesCount.value = 0;
    for (let city of cities) {
        const top_father_names = await getTopCityFatherNames(city, 5);
        uniqueRegionFatherNamesCount.value += top_father_names.total;
        for (let top_name of top_father_names["formatted"]) {
            topRegionFatherNames.value.push({
                name: top_name.name,
                pop_number: top_name.count || 0
            });
        }
        topRegionFatherNames.value.sort((a, b) => b.pop_number - a.pop_number);
    }
};

const fetchTopRegionGrandFatherNames = async () => {
    topRegionGrandFatherNames.value = [];
    uniqueRegionGrandFatherNamesCount.value = 0;
    for (let city of cities) {
        let top_names = await getTopCityGrandFatherNames(city, 5);
        uniqueRegionGrandFatherNamesCount.value += top_names.total;
        for (let top_name of top_names.formatted) {
            topRegionGrandFatherNames.value.push({
                name: top_name.name,
                pop_number: top_name.count || 0
            });
        }
        topRegionGrandFatherNames.value.sort((a, b) => b.pop_number - a.pop_number);
    }
};

</script>
<template>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col lg:flex-row gap-8">
            <!-- <SideBarRegionsView /> -->
            <SideBar 
                :page_="'regions'" 
                :sections="sections_"
                :total_population="region_population"
                :number_citites="selected_city_freq.length"
                />
            <main class="flex w-full flex-col gap-8">
                <RegionalOverview 
                    :city_freq="selected_city_freq"
                    :region_population="region_population"
                    :unique_region_names_count="uniqueRegionNamesCount"
                    :unique_region_father_names_count="uniqueRegionFatherNamesCount"
                    :unique_region_grand_father_names_count="uniqueRegionGrandFatherNamesCount"
                />
                <NameDemography
                    :region_population="region_population"
                    :topRegionNames="topRegionNames"
                    :topRegionFatherNames="topRegionFatherNames"
                    :topRegionGrandFatherNames="topRegionGrandFatherNames"
                    :unique_region_names_count="uniqueRegionNamesCount"
                    :unique_region_father_names_count="uniqueRegionFatherNamesCount"
                    :unique_region_grand_father_names_count="uniqueRegionGrandFatherNamesCount"                    
                 />
                <RareNames />
                <h1>Region Data</h1>
            </main>
        </div>
    </div>
</template>