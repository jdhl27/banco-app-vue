<script setup>
import { useUserStore } from "@/store/userFire.js";

const usuariosS = useUserStore();
const userData = usuariosS.user;
</script>

<template>
  <div class="user-info-container">
    <div class="user-info-header">
      <h1>Bienvenido, {{ userData.nombre }}</h1>
    </div>
    <div class="user-info-body">
      <div class="row">
        <div class="col-md-6">
          <div class="card mb-4">
            <div class="card-header">
              <h3 class="card-title">Información Personal</h3>
            </div>
            <div class="card-body">
              <p><strong>Nombre:</strong> {{ userData.nombre }}</p>
              <p><strong>Correo Electrónico:</strong> {{ userData.correo }}</p>
              <p><strong>Teléfono:</strong> {{ userData.telefono }}</p>
              <p><strong>Dirección:</strong> {{ userData.direccion }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-4">
            <div class="card-header">
              <h3 class="card-title">Información Financiera</h3>
            </div>
            <div class="card-body">
              <p>
                <strong>Cuenta Bancaria:</strong> {{ userData.cuentaBancaria }}
              </p>
              <p><strong>Saldo:</strong> ${{ userData.saldo }}</p>
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
</template>

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
