<template>
  <div v-if="isLoading" class="loader-overlay">
    <div class="loader"></div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/userFire.js";
import { computed } from "vue";

const loaderStore = useUserStore();
const isLoading = computed(() => loaderStore.isLoading);
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.loader {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #0e1523;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
