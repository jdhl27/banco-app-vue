import { defineStore } from "pinia";
export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: {},
    isLoading: false,
  }),

  actions: {
  },
});
