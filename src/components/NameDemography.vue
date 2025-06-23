<script setup>
import DemographyCard from './Subcomponents/DemographyCard.vue';
import TopNamesList from './Subcomponents/TopNamesList.vue';

const props = defineProps({
    region_population: Number,
    topRegionNames: Array,
    topRegionFatherNames: Array,
    topRegionGrandFatherNames: Array,
    unique_region_names_count: Number,
    unique_region_father_names_count: Number,
    unique_region_grand_father_names_count: Number
})
const name_props = [
    { 
        title: "Given Names", 
        storke: "#3b82f6",
        textColor: "text-blue-600",
        bgColor: "bg-blue-500"
    },
    { 
        title: "Father Names", 
        storke: "#8b5cf6",
        textColor: "text-purple-600" ,
        bgColor: "bg-purple-500"
    },
    {
        title: "Grandfather Names", 
        storke: "#f97316",
        textColor: "text-orange-600",
        bgColor: "bg-orange-500"
    }
]

const total_population = props.region_population || 0;

</script>
<template>
    <section id="demographics">
        <h2 class="text-2xl font-semibold mb-6">Name Demographics</h2>
        
        <!-- Name Distribution Overview -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <DemographyCard 
             :card="name_props[0]"
             :topRegionName="topRegionNames[0]"
             :unique_region_names_count="unique_region_names_count"
            />

            <DemographyCard 
             :card="name_props[1]"
             :topRegionName="topRegionFatherNames[0]"
             :unique_region_names_count="unique_region_father_names_count"
            />

            <DemographyCard 
             :card="name_props[2]"
             :topRegionName="topRegionGrandFatherNames[0]"
             :unique_region_names_count="unique_region_grand_father_names_count"
            />
        </div>
        <!-- Top Names Lists -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <TopNamesList 
             :topRegionNames="topRegionNames"
             :card="name_props[0]"
            />

            <TopNamesList 
             :topRegionNames="topRegionFatherNames"
             :card="name_props[1]"
            />

            <TopNamesList 
             :topRegionNames="topRegionGrandFatherNames"
             :card="name_props[2]"
            />
        </div>
    </section>
</template>