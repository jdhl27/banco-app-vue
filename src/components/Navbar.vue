<script setup>
import { ref } from "vue";
import { useUserStore } from "@/store/userFire.js";

const usuariosS = useUserStore();

const logout = async () => {
  await usuariosS.logoutUser();
};
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img
          style="width: 21%"
          src="src/assets/davicaspa_logo.png"
          alt="Imagen atractiva"
      /></router-link>
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
        <ul v-if="usuariosS.user?.id" class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/transactions"
              >Transacciones</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/account">Cuenta</router-link>
          </li>
          <li
            class="nav-item"
            style="margin-left: 22px; height: 38px; width: 85px"
          >
            <button type="button" @click="logout" class="btn btn-danger">
              Salir
            </button>
          </li>
        </ul>
        <ul v-else class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/transactions"
              >Información</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/transactions"
              >Descuentos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/transactions"
              >Contacto</router-link
            >
          </li>
          <li
            class="nav-item"
            style="margin-left: 22px; height: 38px; width: 85px"
          >
            <router-link
              class="btn btn-success"
              to="/login"
              v-if="$route.path !== '/login'"
              >Entrar</router-link
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
  padding: 24px 0;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #141e32;
}

.navbar-nav .nav-link {
  font-size: 1.1rem;
  margin-left: 1rem;
  color: rgba(14, 21, 35, 0.61);
}

.navbar-nav .nav-link:hover {
  color: #141f31;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  margin-right: auto;
}

.navbar-nav {
  align-items: center;
}
</style>
