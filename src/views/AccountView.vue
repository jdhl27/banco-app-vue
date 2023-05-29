<template>
  <div class="user-info-container">
    <div class="user-info-header">
      <h1>{{ getSaludo() }}, {{ userData.nombre }}</h1>
    </div>
    <div class="user-info-body">
      <div class="row">
        <div class="col-md-6 container-table">
          <h3 style="text-align: center">Información personal</h3>
          <table class="user-info-table">
            <tbody>
              <tr>
                <th>Nombre:</th>
                <td>{{ userData.nombre }}</td>
              </tr>
              <tr>
                <th>Apellido:</th>
                <td>{{ userData.apellido }}</td>
              </tr>
              <tr>
                <th>Cédula:</th>
                <td>{{ userData.cedula }}</td>
              </tr>
              <tr>
                <th>Género:</th>
                <td>{{ userData.genero }}</td>
              </tr>
              <tr>
                <th>Estado Civil:</th>
                <td>{{ userData.estadoCivil }}</td>
              </tr>
              <tr>
                <th>Dirección:</th>
                <td>{{ userData.direccion }}</td>
              </tr>
              <tr>
                <th>Nacionalidad:</th>
                <td>{{ userData.nacionalidad }}</td>
              </tr>
              <tr>
                <th>Ciudad:</th>
                <td>{{ userData.ciudad }}</td>
              </tr>
              <tr>
                <th>Estado Laboral:</th>
                <td>{{ userData.estadoLaboral }}</td>
              </tr>
              <tr>
                <th>Teléfono:</th>
                <td>{{ userData.telefono }}</td>
              </tr>
              <tr>
                <th>Correo Electrónico:</th>
                <td>{{ userData.correo }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-5">
          <div class="card mb-4">
            <div class="card-header">
              <h3 class="card-title">Información Financiera</h3>
            </div>
            <div class="card-body">
              <div class="info-row">
                <strong>Cuenta Bancaria:</strong>
                <span>{{ userData.cuentaBancaria }}</span>
              </div>
              <div class="info-row">
                <strong>Saldo:</strong>
                <span>${{ userData.saldo }}</span>
              </div>
            </div>
          </div>
          <router-link
            style="margin-right: 12px"
            class="btn btn-success"
            to="/transactions"
          >
            Gestionar transacciones
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/userFire.js";

const usuariosS = useUserStore();
const userData = usuariosS.user;

function getSaludo() {
  if (userData.genero === "masculino") {
    return "Bienvenido";
  } else if (userData.genero === "femenino") {
    return "Bienvenida";
  } else {
    return "Bienvenido/a";
  }
}
</script>

<style scoped>
.user-info-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  border-top: 1px solid #80808059;
}

.user-info-header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #141f31;
}

.card-header {
  background-color: #141f31;
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
  background-color: #fff;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
}

.col-md-6 {
  padding: 15px;
}

.container-table {
  max-width: 707px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #8080804d;
}

.user-info-table {
  width: 100%;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.user-info-table th,
.user-info-table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
  color: #1a1a1a;
}

.info-row strong {
  width: 150px;
}

.info-row span {
  flex: 1;
  margin-left: 10px;
}
</style>
