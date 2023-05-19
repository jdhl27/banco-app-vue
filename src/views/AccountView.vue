<script>
import Footer from "../components/Footer.vue";
</script>
<template>
  <div class="user-info-container">
    <div class="user-info-header">
      <h1>Bienvenido, {{ name }}</h1>
    </div>
    <div class="user-info-body">
      <div class="row">
        <div class="col-md-6">
          <div class="card mb-4">
            <div class="card-header">
              <h3 class="card-title">Información Personal</h3>
            </div>
            <div class="card-body">
              <p><strong>Nombre:</strong> {{ name }}</p>
              <p><strong>Correo Electrónico:</strong> {{ email }}</p>
              <p><strong>Teléfono:</strong> {{ phone }}</p>
              <p><strong>Dirección:</strong> {{ address }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-4">
            <div class="card-header">
              <h3 class="card-title">Información Financiera</h3>
            </div>
            <div class="card-body">
              <p><strong>Cuenta Bancaria:</strong> {{ bankAccount }}</p>
              <p><strong>Tarjeta de Crédito:</strong> {{ creditCard }}</p>
              <p><strong>Saldo:</strong> ${{ balance }}</p>
            </div>
          </div>
          <router-link
            style="margin-right: 12px"
            class="btn btn-success"
            to="/transactions"
            >Transacciones</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <!-- <Footer /> -->
</template>

<script setup>
import { ref } from "vue";

const name = "Juan Pérez";
const email = "juan.perez@mail.com";
const phone = "+52 55 1234 5678";
const address = "Calle Falsa 123, Col. Centro, CDMX";
const bankAccount = "1234-5678-9012-3456";
const creditCard = "**** **** **** 1234";
const balance = 10000;
</script>

<style scoped>
.user-info-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.user-info-header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.card {
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
}

.card:hover {
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
}

.card-header {
  background-color: #0066cc;
  color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 1rem;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0;
}

.card-body {
  padding: 2rem;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
}

.col-md-6 {
  padding: 15px;
}
</style>
