<script setup>

defineProps({
    name: String,
    count: String,
    percent: Number
})
</script>

<template>
<div class="chart-bar relative group" >
    <div class="flex items-center">
        <div class="w-20 text-right pr-4 text-sm text-gray-500">{{ name }}</div>
        <div class="cbg-bar flex-1 relative h-7 overflow-hidden">
            <div class="bar-fill h-full bg-secondary-500 transition-all duration-300 ease-out bar-animation" :style="`width: ${percent}%`"></div>
        </div>
    </div>
    <div class="tooltip absolute -top-10 opacity-0 invisible transition-all duration-200 bg-gray-900 text-white text-xs rounded-lg py-2 px-3 z-10 whitespace-nowrap">
        <div class="font-medium">{{name}}</div>
        <div class="font-bold text-purple-300">{{ count }} COUNT</div>
        <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
    </div>
</div>
</template>
<style>
    .bar-animation {
      animation: barGrow 0.8s ease-out forwards;
    }
    .tooltip {
      transform: translateX(-50%);
      left: 50%;
    }

    .chart-bar:hover .bar-fill {
      filter: brightness(1.1);
      transform: scaleY(1.02);
    }
    
    .chart-bar:hover .tooltip {
      opacity: 1;
      visibility: visible;
    }
    .chart-bar:hover .cbg-bar {
      background-color: #e2e8f0; /* Gray 200 */
    }
  </style>