import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebaseconfig.js";
import router from "../router/index.js";
import { signOut } from "firebase/auth";
import { Notify } from "../notify.js";

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
