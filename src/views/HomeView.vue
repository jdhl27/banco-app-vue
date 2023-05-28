<script setup>
import Footer from "../components/Footer.vue";
</script>
<template>
  <div class="container">
    <div class="bg-2 home-hero-bg">
      <img
        src="https://uploads-ssl.webflow.com/631027b7f762367743783642/631b77b8fdd77e1329832e8e_631027b7f762368f1e78369d_shape-bg-home-hero-finance-x-template%201.svg"
        alt="svg cool"
        class="bg-2 home-hero-bg-shape"
      />
    </div>
    <div class="row">
      <div
        class="col-md-6 d-flex d-flex justify-content-center align-items-center"
      >
        <div class="my-5">
          <h1 class="display-4">Ahorra con nosotros</h1>
          <p class="lead">
            Ofrecemos las mejores tasas de interés del mercado en nuestras
            cuentas de ahorro y un ahorro inicial de $100.
          </p>
          <hr class="my-4" />
          <p>¡Comenzá a ahorrar hoy mismo con nuestro banco!</p>
          <router-link
            class="btn btn-primary btn-lg"
            to="/account"
            role="button"
            >Abrir cuenta</router-link
          >
        </div>
      </div>
      <div class="col-md-6 d-flex justify-content-center">
        <div class="home-hero-circle"></div>
        <img
          class="animated-image"
          src="src/assets/hero2.png"
          alt="Imagen atractiva"
        />
      </div>
    </div>
  </div>
  <!-- <Footer /> -->
</template>

<style scoped>
/* Estilos para la primera columna */
.col-md-6:nth-child(1) {
  padding: 30px;
}

.col-md-6:nth-child(1) h1 {
  font-size: 62px;
  color: #0e1523;
}

.col-md-6:nth-child(1) p {
  font-size: 18px;
  color: rgba(14, 21, 35, 0.61);
}

.col-md-6:nth-child(1) hr {
  border-color: #333;
}

.col-md-6:nth-child(1) a.btn-primary {
  font-size: 20px;
  border-color: #333;
  padding: 15px 41px;
  background-color: #0e1523;
  transition: box-shadow 0.3s, transform 0.3s;
}

.col-md-6:nth-child(1) a.btn-primary:hover {
  background-color: #000;
  border-color: #000;
  box-shadow: 0 4px 30px rgba(20, 30, 50, 0.35);
  transform: translate3d(0, -3px, 0.01px);
}
.bg-2.home-hero-bg {
  z-index: -1;
  min-height: 1183px;
  color: rgba(20, 30, 50, 0.47);
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
  overflow: hidden;
  position: absolute;
}

.bg-2.home-hero-bg-shape {
  max-width: 67%;
}

.home-hero-circle {
  z-index: -1;
  position: absolute;
  width: 36%;
  min-height: 589px;
  background-image: linear-gradient(152.59deg, #141e32, #0e1523);
  border-radius: 9999px;
  top: 242px;
}

.animated-image {
  width: 100%;
  animation: floatAnimation 3s ease-in-out infinite;
  filter: drop-shadow(0 2px 4px #fff);
}

@keyframes floatAnimation {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
