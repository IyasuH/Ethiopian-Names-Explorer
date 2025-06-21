<script setup>
import { onMounted, ref } from 'vue';
import { rareName, rareFatherName, rareGrandFatherName } from '../services/api';
import { useRoute } from 'vue-router';
import region_cities from '../assets/region_cities.json';
import RareNameList from './Subcomponents/RareNameList.vue';
const rareNames = ref([]);
const rareFatherNames = ref([]);
const rareGrandFatherNames = ref([]);
const currentPageNames = ref(1);
const currentPageFatherNames = ref(1);
const currentPageGrandFatherNames = ref(1);
const totalNoPagesNames = ref(0);
const totalNoPagesFatherNames = ref(0);
const totalNoPagesGrandFatherNames = ref(0);

const route = useRoute();
const regions_name = route.params.region_name;
const cities = region_cities[regions_name] || [];

onMounted(async () => {
    await fetchRareNames();
    await fetchRareFatherNames();
    await fetchRareGrandFatherNames();
})

const nextPageNames = async () => {
    if (currentPageNames.value < totalNoPagesNames.value) {
        currentPageNames.value++
        await fetchRareNames();
    }
}

const previousPageNames = async () => {
    if (currentPageNames.value > 1) {
        currentPageNames.value--;
        await fetchRareNames();
    }
}

const nextPageFatherNames = async () => {
    if (currentPageFatherNames.value < totalNoPagesFatherNames.value) {
        currentPageFatherNames.value++
        await fetchRareFatherNames();
    }
}

const previousPageFatherNames = async () => {
    if (currentPageFatherNames.value > 1) {
        currentPageFatherNames.value--;
        await fetchRareFatherNames();
    }
}

const nextPageGrandFatherNames = async () => {
    if (currentPageGrandFatherNames.value < totalNoPagesGrandFatherNames.value) {
        currentPageGrandFatherNames.value++
        await fetchRareGrandFatherNames();
    }
}

const previousPageGrandFatherNames = async () => {
    if (currentPageGrandFatherNames.value > 1) {
        currentPageGrandFatherNames.value--;
        await fetchRareGrandFatherNames();
    }
}

const fetchRareGrandFatherNames = async() => {
    rareGrandFatherNames.value = [];
    totalNoPagesGrandFatherNames.value = 0;
    for (let city of cities) {
        const rare_f_names = await rareGrandFatherName(currentPageGrandFatherNames.value, city);
        rareGrandFatherNames.value.push(...rare_f_names.formatted);
        totalNoPagesGrandFatherNames.value += rare_f_names.numberOfPages;
    }
    rareGrandFatherNames.value.sort((a, b) => b.frequency - a.frequency);
}


const fetchRareFatherNames = async() => {
    rareFatherNames.value = [];
    totalNoPagesFatherNames.value = 0;
    for (let city of cities) {
        const rare_f_names = await rareFatherName(currentPageFatherNames.value, city);
        rareFatherNames.value.push(...rare_f_names.formatted);
        totalNoPagesFatherNames.value += rare_f_names.numberOfPages;
    }
    rareFatherNames.value.sort((a, b) => b.frequency - a.frequency);
}

const fetchRareNames = async() => {
    rareNames.value = [];
    totalNoPagesNames.value = 0;
    for (let city of cities) {
        const rare_names = await rareName(currentPageNames.value, city);
        rareNames.value.push(...rare_names.formatted);
        totalNoPagesNames.value += rare_names.numberOfPages;
    }
    rareNames.value.sort((a, b) => b.frequency - a.frequency);
}



const cards = [
    {
        "title": "Rare Given Names",
        "icon": "pi-file-check",
        "iconBgColor": "bg-red-100",
        "iconColor": "text-red-600",
        "textColor": "text-red-800"
    },
    {
        "title": "Rare Father Names",
        "icon": "pi-user",
        "iconBgColor": "bg-blue-100",
        "iconColor": "text-blue-600",
        "textColor": "text-blue-800"
    },
    {
        "title": "Rare Grandfather Names",
        "icon": "pi-heart",
        "iconBgColor": "bg-green-100",
        "iconColor": "text-green-600",
        "textColor": "text-green-800"
    }        
]


</script>
<template>
    <section id="rare-names">
        <h2 class="text-2xl font-semibold mb-6">Least Popular Names</h2>
        <p class="text-gray-600 mb-8 max-w-3xl">
            These unique names appear only once or twice in our dataset, representing the rich diversity of Ethiopian naming traditions.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
             <RareNameList 
                :card="cards[0]"
                :rareNames="rareNames"
                :currentPage="currentPageNames"
                :totalNoPages="totalNoPagesNames"
                :previousPage="previousPageNames"
                :nextPage="nextPageNames"
             />

             <RareNameList 
                :card="cards[1]"
                :rareNames="rareFatherNames"
                :currentPage="currentPageFatherNames"
                :totalNoPages="totalNoPagesFatherNames"
                :previousPage="previousPageFatherNames"
                :nextPage="nextPageFatherNames"
             />

             <RareNameList 
                :card="cards[2]"
                :rareNames="rareGrandFatherNames"
                :currentPage="currentPageGrandFatherNames"
                :totalNoPages="totalNoPagesGrandFatherNames"
                :previousPage="previousPageGrandFatherNames"
                :nextPage="nextPageGrandFatherNames"
             />

        </div>
    </section>
</template>