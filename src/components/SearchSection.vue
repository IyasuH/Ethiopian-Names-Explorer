<script setup>
import SectionTitle from './Subcomponents/SectionTitle.vue';
import SectionSubtitle from './Subcomponents/SectionSubtitle.vue';
import SearchButton from './Subcomponents/SearchButton.vue';
import { ref } from 'vue';
import { searchName } from '../services/api';

const name_filters = [
    {label: "Given name", value: "name"},
    {label: "Father's name", value: "father_name"},
    {label: "Grandfather's name", value: "grand_father_name"}
]

const selected_Name_Type = ref('name');
const selected_City = ref('');
const search_Name = ref('');

const city_filters = [
    {label: "All cities", value: ""},
    {label: "Addis Ababa", value: "addis-ababa"},
    {label: "Dire Dawa", value: "dire-dawa"},
    {label: "Mekelle", value: "mekelle"},
    {label: "Gondars", value: "gondar"},
    {label: "Bahir Dar", value: "bahir-dar"}
]
const search_sample = ref([
    {name: "Abebe", count: 100, location: "Addis Ababa"},
    {name: "Kidus", count: 100, location: "Dire Dawa"},
    {name: "Tigist", count: 100,  location: "Gondar"},
    {name: "Dawit", count: 100, location: "Bahir Dar"},
    {name: "Hiwot", count: 100,  location: "Mekelle"}
])

const SearchFunc = async () => {
    console.log(`selected_Name_Type ${selected_Name_Type.value}`)
    console.log(`selected_City ${selected_City.value}`)
    console.log(`searchName ${search_Name.value}`)
    const city_value = selected_City.value.trim();
    const name_type_value = selected_Name_Type.value.trim();
    const name_value = search_Name.value.trim().toUpperCase();
    if (name_type_value === "name") {
        search_sample.value = await searchName(name_value);
        console.log(`Search button is clicked. ${search_sample.value}`);
    }
    // let search_names_data = await getTopCityNames(city);
    // console.log(`Search button is clicked. ${search_names_data}`)
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
                
                    <div> <SearchButton title="Search" @click="SearchFunc()"/> </div>
                    
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
                                    <tr v-for="search_data in search_sample ">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ search_data.name }}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ search_data.count.toLocaleString() }}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ search_data.location }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="mt-2 text-sm text-gray-500">
                            Showing 5 of 782 results
                        </div>
                        
                        <div class="flex items-center justify-between mt-4">
                            <div class="flex items-center">
                                <span class="text-sm text-gray-700">
                                Showing <span class="font-medium">1</span> to <span class="font-medium">5</span> of <span class="font-medium">782</span> results
                                </span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <button class="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                Previous
                                </button>
                                <button class="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>