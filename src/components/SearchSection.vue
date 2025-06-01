<script setup>
import SectionTitle from './Subcomponents/SectionTitle.vue';
import SectionSubtitle from './Subcomponents/SectionSubtitle.vue';
import SearchButton from './Subcomponents/SearchButton.vue';
import NavButton from './Subcomponents/NavButton.vue';
import { ref } from 'vue';
import { searchName, searchFName } from '../services/api';

const name_filters = [
    {label: "Given name", value: "name"},
    {label: "Father's name", value: "father_name"},
    {label: "Grandfather's name", value: "grand_father_name"}
]

const selected_Name_Type = ref('name');
const selected_City = ref('');
const search_Name = ref('');
const current_page = ref(1);
const total_no_pages = ref(1);
const length_per_page = ref(0);

const city_filters = [
    {label: "All cities", value: ""},
    {label: "Adama", value: "Adama"},
    {label: "Addis Ababa", value: "Addis Ababa"},
    {label: "Asosa", value: "Asosa"},
    {label: "Bahir Dar", value: "Bahir Dar"},
    {label: "Dese", value: "Dese"},
    {label: "Dire Dawa", value: "Dire Dawa"},
    {label: "Gambela", value: "Gambela"},
    {label: "Hawassa", value: "Hawassa"},
    {label: "Hossana", value: "Hossana"},
    {label: "Jijiga", value: "Jijiga"},
    {label: "Jimma", value: "Jimma"},
    {label: "Mekele", value: "Mekele"},
    {label: "Semera", value: "Semera"}
]
const search_sample = ref({"formatted": [], "total": 5});

const SearchFunc = async () => {
    const city_value = selected_City.value.trim();
    const name_type_value = selected_Name_Type.value.trim();
    const name_value = search_Name.value.trim().toUpperCase();
    if (name_type_value === "name") {
        search_sample.value = await searchName(name_value, current_page.value, city_value);
        total_no_pages.value = search_sample.value.numberOfPages;
        // length_per_page.value = await search_sample.value.formatted.length;
        await console.log(`Search button is clicked. ${JSON.stringify(search_sample.value)}`);
    } else if (name_type_value === "father_name") {
        search_sample.value = await searchFName(name_value, current_page.value, city_value);
        total_no_pages.value = search_sample.value.numberOfPages;
        await console.log(`Search button is clicked. ${JSON.stringify(search_sample.value)}`);
    } else if (name_type_value === "grand_father_name") {
        // Implement search logic for grandfather's name
        console.log(`Searching for grandfather's name: ${name_value} in city: ${city_value}`);
        // Placeholder for actual search logic
    }
}

const resetSearch = () => {
    selected_Name_Type.value = 'name';
    selected_City.value = '';
    search_Name.value = '';
    current_page.value = 1;
    search_sample.value = {"formatted": [], "total": 0};
    total_no_pages.value = 1;
}

const nextPage = () => {

    if (current_page.value < total_no_pages.value) {
        current_page.value++;
        SearchFunc();
    }
}

const previousPage = () => {
    if (current_page.value > 1) {
        current_page.value--;
        SearchFunc();
    }
}

</script>

<template>
    <section id="search" class="mb-16 scroll-mt-20">
        <SectionTitle section_name="Search & Filter" section_color="bg-accent-600"/>        
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <SectionSubtitle 
                subtitle="Search & Filter"
                description="Search for names and filter results by city"
            />        
            <div class="p-6">
                <div class="grid gap-6">
                    <div class="grid sm:grid-cols-4 gap-4">
                        <div class="sm:col-span-2">
                            <label for="search" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="pi pi-search h-5 w-5 text-gray-400"> </i>
                                </div>
                                <input v-model="search_Name" type="text" id="search" placeholder="Enter a name to search..." class="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-accent-500 focus:border-accent-500 sm:text-sm h-10 border px-3 py-2">
                            </div>
                        </div>
                        
                        <div>
                            <label for="name-type" class="block text-sm font-medium text-gray-700 mb-1">Name Type</label>
                            <select v-model="selected_Name_Type" id="name-type" class="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-accent-500 focus:border-accent-500 sm:text-sm h-10 border px-3 py-2">
                                <option v-for="name in name_filters" :value="name.value" :key="name.value">{{ name.label }}</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="city" class="block text-sm font-medium text-gray-700 mb-1">City</label>
                            <select v-model="selected_City" id="city" class="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-accent-500 focus:border-accent-500 sm:text-sm h-10 border px-3 py-2">
                                <option v-for="city in city_filters" :value="city.value" :key="city.value">{{ city.label }}</option>
                            </select>
                        </div>
                    </div>

                    <div> 
                        <SearchButton title="Search" @click="SearchFunc()"/> 
                        <button @click="resetSearch" class="ml-2 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500">
                            <i class="pi pi-refresh p-2"></i>
                            Reset
                        </button>
                    </div>
                    
                    <div class="mt-4">
                        <div class="overflow-hidden border border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr v-for="search_data in (search_sample.formatted)">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ search_data.name }}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ search_data.count.toLocaleString() }}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ search_data.location }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="mt-2 text-sm text-gray-500">
                            Showing {{ length_per_page }} of {{ search_sample.total}} results
                        </div>
                        
                        <div class="flex items-center justify-between mt-4">
                            <div class="flex items-center">
                                <span class="text-sm text-gray-700">
                                Page <span class="font-medium"> {{ current_page }}</span> of <span class="font-medium">{{ total_no_pages }}</span>
                                </span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <NavButton title="Previous" @click="previousPage()"/>
                                <NavButton title="Next" @click="nextPage()"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>