<script setup>
import { ref } from 'vue';
import SectionTitle from './Subcomponents/SectionTitle.vue';
import SectionSubtitle from './Subcomponents/SectionSubtitle.vue';
import ChartButton from './Subcomponents/ChartButton.vue';
import ChartItem from './Subcomponents/ChartItem.vue';

const activeChart = ref("Given Names")

const name_types = ["Given Names", "Father's Names", "Grandfather's Names"]
const given_names_chart = [
    {name: "Abebe", amount: 3200, percent: 80},
    {name: "Mohammed", amount: 2800, percent: 70},
    {name: "Tigist", amount: 2500, percent: 62},
    {name: "Kidus", amount: 2200, percent: 55},
    {name: "Hiwot", amount: 2000, percent: 50},
    {name: "Dawit", amount: 1800, percent: 45},
    {name: "Rahel", amount: 1600, percent: 40},
    {name: "Yonas", amount: 1500, percent: 37},
    {name: "Meron", amount: 1400, percent: 35},
    {name: "Henok", amount: 1300, percent: 32}
]
const father_names_chart = [
    {name: "Kebede", amount: 3200, percent: 90},
    {name: "Mohammed", amount: 2800, percent: 70},
    {name: "Tigist", amount: 2500, percent: 62},
    {name: "Kidus", amount: 2200, percent: 55},
    {name: "Hiwot", amount: 2000, percent: 50},
    {name: "Dawit", amount: 1800, percent: 45},
    {name: "Rahel", amount: 1600, percent: 40},
    {name: "Yonas", amount: 1500, percent: 37},
    {name: "Meron", amount: 1400, percent: 35},
    {name: "Henok", amount: 1300, percent: 32}
]
const grand_names_chart = [
    {name: "Getachew", amount: 3200, percent: 100},
    {name: "Mohammed", amount: 2800, percent: 70},
    {name: "Tigist", amount: 2500, percent: 62},
    {name: "Kidus", amount: 2200, percent: 55},
    {name: "Hiwot", amount: 2000, percent: 50},
    {name: "Dawit", amount: 1800, percent: 45},
    {name: "Rahel", amount: 1600, percent: 40},
    {name: "Yonas", amount: 1500, percent: 37},
    {name: "Meron", amount: 1400, percent: 35},
    {name: "Henok", amount: 1300, percent: 32}
]

const chart_items = ref(given_names_chart)

const changeActiveChart = (chartName) => {
    console.log(`Changed active chart to ${chartName}`)
    activeChart.value = chartName;
    if (chartName === "Given Names"){
        chart_items.value = given_names_chart
    } else if (chartName === "Father's Names") {
        chart_items.value = father_names_chart
    } else if (chartName === "Grandfather's Names") {
        chart_items.value = grand_names_chart
    }
}

</script>
<template>
    <section id="charts" class="mb-16 scroll-mt-20">
        <SectionTitle section_name="Name Frequency Charts" section_color="bg-secondary-600"/>        
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <SectionSubtitle 
                subtitle="Name Frequency Analysis"
                description="Explore the most common names across different name types"
            />
        
            <div class="border-b border-gray-200">
                <div class="flex">
                    <div v-for="(name_, index) in name_types" :key="index">
                        <ChartButton v-if="name_===`${activeChart}`"
                            text_color="text-secondary-700"
                            border_style="border-secondary-600"
                            :button_text="`${name_}`"
                            @click="changeActiveChart(name_)"
                        />
                        <ChartButton v-else
                            hover="text-gray-700"
                            :button_text="name_"
                            @click="changeActiveChart(name_)"
                        />
                    </div>
                </div>
            </div>
        
            <div class="p-6">
                <div class="h-[400px] w-full">
                <!-- Placeholder for chart -->
                <div class="h-full flex flex-col">
                    <div class="flex items-center justify-between mb-4">
                        <h4 class="font-medium text-gray-900">Top 10 Given Names</h4>
                        <div class="flex items-center text-sm text-gray-500">
                            <span class="w-3 h-3 bg-secondary-500 rounded-full mr-1"></span>
                            <span>Frequency</span>
                        </div>
                    </div>
                    
                    <div class="flex-1 flex flex-col justify-between">
                        <div v-for="(item, index) in chart_items" :key="index">
                            <ChartItem 
                                :name="item.name"
                                :amount="item.amount"
                                :percent="item.percent"
                            />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>

</template>