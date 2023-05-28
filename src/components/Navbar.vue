<script setup>
import { ref } from "vue";
import { useUserStore } from "@/store/userFire.js";

const usuariosS = useUserStore();

const logout = async () => {
  await usuariosS.logoutUser();
};
</script>
<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Davicaspa</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul v-if="usuariosS.user?.id" class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/transactions"
              >Transacciones</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/account">Cuenta</router-link>
          </li>
          <li class="nav-item">
            <button type="button" @click="logout" class="btn btn-danger">
              Cerrar sesión
            </button>
          </li>
        </ul>
        <ul v-else class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              style="margin-right: 12px"
              class="btn btn-success"
              to="/login"
              >Entrar</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="btn btn-warning" to="/register"
              >Registrar</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  margin-bottom: 28px;
  border-bottom: 1px solid #d7d7d7;
  box-shadow: 0px 1px 7px #c5c5c5;
}
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.navbar-nav .nav-link {
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 1rem;
}

.navbar-nav .nav-link:hover {
  border-bottom: 2px solid #fff;
}
</style>
