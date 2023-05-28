import { defineStore } from "pinia";
export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: {},
    isLoading: false,
  }),

  actions: {
    generateUniqueCardNumber() {
      let cardNumber = "";
      for (let i = 0; i < 11; i++) {
        const digit = Math.floor(Math.random() * 10); // Generar un dígito aleatorio del 0 al 9
        cardNumber += digit.toString();
      }
      return cardNumber;
    },
  },
});
