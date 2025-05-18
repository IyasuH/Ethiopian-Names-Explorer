<script setup>
import { ref } from 'vue'
import TopNamesMap from './Subcomponents/TopNamesMap.vue';
import SectionTitle from './Subcomponents/SectionTitle.vue';
import SectionSubtitle from './Subcomponents/SectionSubtitle.vue';

const regions = [
    {name: 'Tigray', x: '200', y: '100', width: '80', height: '60', text_x: '240', text_y: '130',  color: 'fill-primary-100', hover: 'fill-primary-200'},
    {name: 'Amhara', x: '180', y: '170', width: '100', height: '80', text_x: '230', text_y: '210',  color: 'fill-primary-200', hover: 'fill-primary-300'},
    {name: 'Oromia', x: '150', y: '260', width: '140', height: '100', text_x: '220', text_y: '310',  color: 'fill-primary-100', hover: 'fill-primary-200'},
    {name: 'SNNPR', x: '120', y: '370', width: '100', height: '70', text_x: '170', text_y: '405',  color: 'fill-primary-100', hover: 'fill-primary-200'},
    {name: 'Afar', x: '290', y: '150', width: '70', height: '90', text_x: '325', text_y: '195',  color: 'fill-primary-100', hover: 'fill-primary-200'},
    {name: 'Somali', x: '300', y: '250', width: '90', height: '120', text_x: '345', text_y: '310',  color: 'fill-primary-100', hover: 'fill-primary-200'},
    {name: 'AA', x: '190', y: '240', width: '30', height: '30', text_x: '205', text_y: '255',  color: 'fill-primary-500', hover: 'fill-primary-400'}
]

const top_names = [
    {name: 'Abebe', pop_number: 1245, color_number: 600},
    {name: 'Tadesse', pop_number: 982, color_number: 500},
    {name: 'Getachew', pop_number: 876, color_number: 400}
]

const selectedRegion = ref('AA');

const selectRegion = (region) => {
    selectedRegion.value = region
    console.log(`Region changed to ${region}.`)
}
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
                        <svg viewBox="0 0 500 500" class="w-full h-full">
                            <g v-for="region in regions" :key="region.name" transform="translate(10, 10) scale(0.95)">
                                <rect @click="selectRegion(region.name)" 
                                    :x="region.x" :y="region.y" 
                                    :width="region.width" :height="region.height" rx="8" 
                                    :class="[`${region.color} hover:${region.hover}`,
                                        selectedRegion === region.name
                                        ? 'stroke-primary-800'
                                        : 'stroke-primary-300',
                                    'cursor-pointer transition-colors']" />
                                <text :x="region.text_x" :y="region.text_y" text-anchor="middle" class="text_xs font-medium pointer-events-none">{{ region.name }}</text>
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
                                <span class="font-semibold">25,000</span>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-gray-700 mb-2">Top 3 Given Names:</h4>
                                <div v-for="(top, index) in top_names" :key="index">
                                    <TopNamesMap 
                                        :color_number="top.color_number"
                                        :count_number="`${index+1}`"
                                        :person_name="top.name"
                                        :pop_number="top.pop_number"
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