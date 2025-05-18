<script setup>
import SectionTitle from './Subcomponents/SectionTitle.vue';
import SectionSubtitle from './Subcomponents/SectionSubtitle.vue';
import SearchButton from './Subcomponents/SearchButton.vue';
const name_filters = [
    {label: "Any name type", value: "all"},
    {label: "Given name", value: "name"},
    {label: "Father's name", value: "father_name"},
    {label: "Grandfather's name", value: "grand_father_name"}
]

const city_filters = [
    {label: "All cities", value: ""},
    {label: "Addis Ababa", value: "addis-ababa"},
    {label: "Dire Dawa", value: "dire-dawa"},
    {label: "Mekelle", value: "mekelle"},
    {label: "Gondars", value: "gondar"},
    {label: "Bahir Dar", value: "bahir-dar"}
]
const search_sample = [
    {name: "Abebe", father_name: "Tadesse", grand_father_name: "Wolde", city: "Addis Ababa"},
    {name: "Kidus", father_name: "Bekele", grand_father_name: "Gebre", city: "Dire Dawa"},
    {name: "Tigist", father_name: "Haile", grand_father_name: "Tekle", city: "Gondar"},
    {name: "Dawit", father_name: "Tesfaye", grand_father_name: "Mengistu", city: "Bahir Dar"},
    {name: "Hiwot", father_name: "Kebede", grand_father_name: "Assefa", city: "Mekelle"}
]

const SearchFunc = () => {
    console.log(`Search button is clicked.`)
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
                                <input type="text" id="search" placeholder="Enter a name to search..." class="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-accent-500 focus:border-accent-500 sm:text-sm h-10 border px-3 py-2">
                            </div>
                        </div>
                        
                        <div>
                            <label for="name-type" class="block text-sm font-medium text-gray-700 mb-1">Name Type</label>
                            <select id="name-type" class="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-accent-500 focus:border-accent-500 sm:text-sm h-10 border px-3 py-2">
                                <div v-for="name in name_filters">
                                    <option :value="name.value">{{ name.label }}</option>
                                </div>
                            </select>
                        </div>
                        
                        <div>
                            <label for="city" class="block text-sm font-medium text-gray-700 mb-1">City</label>
                            <select id="city" class="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-accent-500 focus:border-accent-500 sm:text-sm h-10 border px-3 py-2">
                                <div v-for="city in city_filters">
                                    <option :value="city.value">{{ city.label }}</option>
                                </div>
                            </select>
                        </div>
                    </div>
                
                    <div> <SearchButton title="Search" @click="SearchFunc()"/> </div>
                    
                    <div class="mt-4">
                        <div class="overflow-hidden border border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Given Name</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Father's Name</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grandfather's Name</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr v-for="search_data in search_sample ">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ search_data.name }}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ search_data.father_name }}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ search_data.grand_father_name }}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ search_data.city }}</td>
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