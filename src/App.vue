<template>
  <Navbar />
  <RouterView />
  <Footer v-if="$route.path !== '/login' && $route.path !== '/register'" />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
