<script setup>
import { ref, onMounted } from 'vue'
import TopNamesMap from './Subcomponents/TopNamesMap.vue';
import SectionTitle from './Subcomponents/SectionTitle.vue';
import SectionSubtitle from './Subcomponents/SectionSubtitle.vue';
import regionData from '../assets/ethiopia-region.json';
import { getRegionsFrequency, getTopCityNames } from '../services/api';
import region_cities from '../assets/region_cities.json';

const regions = ref(regionData);
const result = ref([]);
const selectedRegion = ref('Addis Ababa');
const selectedRegionPop = ref(0);
const topCityNames = ref([]);

const transform = ref({ x: 0, y: 0, scale: 1 });
const isPanning = ref(false);
const start = ref({ x: 0, y: 0 });

const top_names = ref([
    {name: 'Abebe', pop_number: 1245, color_number: 600},
    {name: 'Tadesse', pop_number: 982, color_number: 500},
    {name: 'Getachew', pop_number: 876, color_number: 400}
])

const startPan = (event) => {
    isPanning.value = true;
    start.value = { x: event.clientX - transform.value.x, y: event.clientY - transform.value.y };
};

const pan = (event) => {
    if (!isPanning.value) return;
    transform.value.x = event.clientX - start.value.x;
    transform.value.y = event.clientY - start.value.y;
};

const endPan = () => {
    isPanning.value = false;
};

const zoom = (event) => {
    event.preventDefault();
    const scaleFactor = event.deltaY > 0 ? 0.9 : 1.1;
    transform.value.scale *= scaleFactor;
    transform.value.scale = Math.min(Math.max(transform.value.scale, 0.5), 3);
};

const selectRegion = (region) => {
    selectedRegion.value = region
    selectedRegionPop.value = result.value[selectedRegion.value] || 0;
    fetchTopCityNames();
}

const fetchTopCityNames = async () => {
    const cities = region_cities[selectedRegion.value] || [];
    topCityNames.value = [];
    for (let city of cities) {
        let top_names = await getTopCityNames(city);
        for (let top_name of top_names) {
            topCityNames.value.push({
                name: top_name.name,
                pop_number: top_name.count || 0
            });
        }
        topCityNames.value.sort((a, b) => b.pop_number - a.pop_number);
    }
};

onMounted(async () => {
    // Initialize the map or any other setup if needed
    result.value = await getRegionsFrequency();
    // for (let region in result.value) {
    // regions_color.value.set(region[])
    // }
    selectedRegionPop.value = result.value[selectedRegion.value] || 0;
    await fetchTopCityNames();
});

</script>
<template>
    <section id="map" class="mb-16 scroll-mt-20">
        <SectionTitle section_name="Interactive Map" section_color="bg-primary-600"/>
        
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <SectionSubtitle 
                subtitle="Population Distribution"
                description="Explore name distribution across different regions of Ethiopia"
            />
            <div class="p-6">
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="md:col-span-2 relative bg-gray-100 rounded-lg p-4 h-[500px] overflow-hidden">
                        <!-- SVG Map of Ethiopia -->
                        <svg viewBox="0 0 600 600" class="w-full h-full" @mousedown="startPan" @mousemove="pan" @mouseup="endPan" @wheel="zoom">
                            <g :transform="`translate(${transform.x}, ${transform.y}) scale(${transform.scale})`">
                                <g v-for="region in regions" :key="region.name" >
                                    <path
                                        @click="selectRegion(region.name)"
                                        :d="region.path"
                                        :class="[
                                        // regions_color.get(region.name) || 'fill-primary-200',
                                        // region.color,
                                        `fill-primary-${region.color}`,
                                        `hover: fill-primary-${region.hover_color}`,
                                        selectedRegion === region.name ? 'stroke-primary-800' : 'stroke-primary-300',
                                        'cursor-pointer transition-colors'
                                        ]"
                                    />
                                    <text
                                        :x="region.text_x"
                                        :y="region.text_y"
                                        text-anchor="middle"
                                        class="text-base font-medium pointer-events-none"
                                    >
                                        {{ region.name }}
                                    </text>
                                </g>
                            </g>
                        </svg>                            
                        <div class="absolute bottom-4 left-4 text_xs text-gray-500 bg-white/80 px-2 py-1 rounded">
                            Click on a region to see details
                        </div>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <h3 class="text_xl font-display font-semibold mb-4">{{ selectedRegion }} Region</h3>
                        <div class="space-y-4">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">Population in dataset:</span>
                                <span class="font-semibold">{{selectedRegionPop.toLocaleString()}}</span>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-gray-700 mb-2">Top {{ topCityNames.length }} Given Names:</h4>
                                <div v-for="(top, index) in topCityNames" :key="index">
                                    <TopNamesMap 
                                        :color_number="200"
                                        :count_number="`${index+1}`"
                                        :person_name="top.name"
                                        :pop_number="top.pop_number.toLocaleString()"
                                    />
                                </div>
                            </div>
                        
                            <div class="pt-2">
                                <button class="text-primary-600 hover:text-primary-800 text-sm font-medium flex items-center">
                                View detailed statistics
                                <i class="pi pi-angle-right p-2"> </i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
</template>
