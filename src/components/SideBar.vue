<script setup>
import { ref } from "vue"
import DataStatItem from "./Subcomponents/DataStatItem.vue";
const sections = [
    {id: 'map', label: 'Interactive Map', icon: 'map'},
    {id: 'charts', label: 'Name Charts', icon: 'chart-bar'},
    {id: 'search', label: 'Search & Filter', icon: 'search'},
    {id: 'about', label: 'About', icon: 'info-circle'}
]
const activeSection = ref('map');

const changeActive = (active) => {
    console.log(`changing to color ${active}`)
    activeSection.value = active
}

</script>
<template>
      <aside class="lg:w-64 flex-shrink-0">
        <div class="sticky top-20">
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
          
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h3 class="font-display font-semibold text-lg mb-4 text-gray-900">Dataset Stats</h3>
            <div class="space-y-4">
                <DataStatItem title="Total Records" content="100,000"/>
                <DataStatItem title="Unique Names" content="12,458"/>
                <DataStatItem title="Regions" content="11"/>
                <DataStatItem title="Cities" content="85"/>
            </div>
          </div>
        </div>
      </aside>    
</template>