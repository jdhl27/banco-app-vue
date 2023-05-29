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
      <div class="form-group" style="display: flex; flex-direction: column">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required />
        <a
          class="forgot-password-link"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          >Olvidé contraseña</a
        >
      </div>
      <button type="submit">Iniciar sesión</button>

      <router-link class="btn mt-5" to="/register"
        >Quiero registrarme</router-link
      >
    </form>

    <!-- Olvidé contraseña modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Olvidé contraseña</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="forgotEmail">Correo electrónico</label>
              <input
                type="email"
                id="forgotEmail"
                v-model="forgotEmail"
                required
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="sendPasswordReset"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/store/userFire.js";

const usuariosS = useUserStore();

const correo = ref("");
const password = ref("");
const forgotEmail = ref(null);

const handleSubmit = async () => {
  const userData = {
    correo: correo.value,
    password: password.value,
  };
  await usuariosS.loginUser(userData);
};

const sendPasswordReset = async () => {
  if (forgotEmail.value) {
    const response = await usuariosS.forgotPassword(forgotEmail.value);
    if (response) {
      forgotEmail.value = null;
      const modal = document.getElementById("exampleModal");
      const bootstrapModal = bootstrap.Modal.getInstance(modal);
      bootstrapModal.hide();
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #9e9eaf40;
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #141e32;
}

p {
  font-size: 1rem;
  color: #0e1523;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  font-weight: 600;
  display: block;
  color: #141e32;
}

input {
  padding: 0.8rem;
  border-radius: 5px;
  border: none;
  background-color: #f2f2f2;
  font-size: 1rem;
  margin-top: 0.5rem;
  width: 100%;
}

button[type="submit"] {
  background-color: #141e32;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button[type="submit"]:hover {
  background-color: #0e1523;
}

a {
  color: #0066cc;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: #004499;
}

.modal-title {
  color: #141e32;
}

.forgot-password-link {
  color: #0066cc;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  margin-top: 7px;
  text-align: end;
}

.forgot-password-link:hover {
  color: #004499;
}

.modal-content {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  color: #141e32;
}

.modal-footer {
  padding: 11px;
  background-color: #f2f2f2;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.btn-secondary {
  background-color: #f2f2f2;
  color: #141e32;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.btn-secondary:hover {
  background-color: #e6e6e6;
}

.btn-primary {
  background-color: #141e32;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.btn-primary:hover {
  background-color: #0e1523;
}
</style>
