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
      <div class="col-md-6">
        <div class="my-5">
          <h1 class="display-4">Ahorra con nosotros</h1>
          <p class="lead">
            Ofrecemos las mejores tasas de interés del mercado en nuestras
            cuentas de ahorro.
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
        <div class="my-5">
          <h1 class="display-4">Obtené un crédito</h1>
          <p class="lead">
            Te ofrecemos los mejores planes de financiamiento para cumplir tus
            sueños.
          </p>
          <hr class="my-4" />
          <p>¡Solicitá un crédito con nosotros hoy mismo!</p>
          <router-link
            class="btn btn-primary btn-lg"
            to="/account"
            role="button"
            >Solicitar crédito</router-link
          >
        </div>
      </div>
      <div class="col-md-6 d-flex justify-content-center">
        <img
          style="width: 100%"
          src="src/assets/hero.png"
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
  font-size: 48px;
  color: #000;
}

.col-md-6:nth-child(1) p {
  font-size: 24px;
  color: #666;
}

.col-md-6:nth-child(1) hr {
  border-color: #333;
}

.col-md-6:nth-child(1) a.btn-primary {
  font-size: 24px;
  font-weight: bold;
  border-color: #333;
  background-color: #333;
}

.col-md-6:nth-child(1) a.btn-primary:hover {
  background-color: #000;
  border-color: #000;
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
</style>
