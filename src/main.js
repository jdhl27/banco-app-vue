import "./assets/main.css";

import { createApp } from "vue";
import VueScrollTo from "vue-scrollto";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useUserStore } from "./store/userFire";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(VueScrollTo);

const usuariosS = useUserStore();

app.mixin({
  beforeMount() {
    usuariosS.currentUser();
  },
});

app.use(router);
app.mount("#app");
