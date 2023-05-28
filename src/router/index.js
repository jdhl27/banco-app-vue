import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import AccountView from "../views/AccountView.vue";
import TransactionsView from "../views/TransactionsView.vue";
import { useUserStore } from "@/store/userFire.js";

const requireAuth = async (to, from, next) => {
  const usuariosS = useUserStore();
  const user = await usuariosS.currentUser();
  if (user?.id) {
    next();
  } else {
    next("/login");
  }
};

const isLoggedOutGuard = async (to, from, next) => {
  const usuariosS = useUserStore();
  const user = await usuariosS.currentUser(); // Obtener el estado del usuario
  if (user) {
    router.go(-1);
  } else {
    next();
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      beforeEnter: isLoggedOutGuard,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      beforeEnter: isLoggedOutGuard,
    },
    {
      path: "/account",
      name: "account",
      component: AccountView,
      beforeEnter: requireAuth,
    },
    {
      path: "/transactions",
      name: "transactions",
      component: TransactionsView,
      beforeEnter: requireAuth,
    },
  ],
});

export default router;
