import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useUserStore } from "./store/userFire";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

const usuariosS = useUserStore();

app.mixin({
  beforeMount() {
    usuariosS.currentUser();
  },
});

app.use(router);
app.mount("#app");
