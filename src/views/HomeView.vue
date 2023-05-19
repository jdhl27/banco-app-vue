<script setup>
import Footer from "../components/Footer.vue";
</script>
<template>
  <div class="container">
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
        <img src="src/assets/iphone-auth.png" alt="Imagen atractiva" />
      </div>
    </div>
  </div>
  <!-- <Footer /> -->
</template>

<style scoped>
/* Estilos para la primera columna */
.col-md-6:nth-child(1) {
  background-color: #fff;
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
</style>
