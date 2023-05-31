<template>
  <div>
    <Pie :data="chartData" :options="options" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

const props = defineProps({
  chartData: {
    type: Object,
    required: true,
  },
});

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>
