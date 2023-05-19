import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import AccountView from "../views/AccountView.vue";
import TransactionsView from "../views/TransactionsView.vue";

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
      meta: {
        hiddenFooter: true,
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: {
        hiddenFooter: true,
      },
    },
    {
      path: "/account",
      name: "account",
      component: AccountView,
      meta: {
        hiddenFooter: true,
      },
    },
    {
      path: "/transactions",
      name: "transactions",
      component: TransactionsView,
      meta: {
        hiddenFooter: true,
      },
    },
  ],
});

export default router;
