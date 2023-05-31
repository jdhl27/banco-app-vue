<template>
  <div>
    <Line :data="chartData" :options="options" />
  </div>
</template>

<script setup>
import { Line } from "vue-chartjs";
import { defineProps } from "vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const props = defineProps({
  chartData: {
    type: Object,
    required: true,
  },
});

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: "category",
      labels: props.chartData.datasets[0].data.map(
        (transaction) => transaction.x
      ),
    },
  },
};
</script>
