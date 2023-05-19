<template>
  <div class="login-container">
    <div class="login-header">
      <h1>Iniciar sesión</h1>
      <p>Ingrese sus datos de usuario</p>
    </div>
    <form class="login-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="correo">Correo electrónico</label>
        <input type="email" id="correo" v-model="correo" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const correo = "";
const password = "";
</script>

<style scoped>
.login-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  font-weight: 400;
  display: block;
}

input {
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: #f2f2f2;
  font-size: 1rem;
  margin-top: 0.5rem;
  width: 100%;
}

button[type="submit"] {
  background-color: #0066cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button[type="submit"]:hover {
  background-color: #004499;
}
</style>
