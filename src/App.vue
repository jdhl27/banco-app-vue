<template>
  <Navbar />
  <Loader />
  <RouterView />
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/Loader.vue";
</script>
