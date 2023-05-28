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

    async registerUser(userState) {
      this.isLoading = true;
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          userState.correo,
          userState.password
        );
        delete userState.password;
        const uniqueCardNumber = generateUniqueCardNumber();

        const docRef = await addDoc(collection(db, "users"), {
          id: userCredential.user.uid,
          cuentaBancaria: uniqueCardNumber,
          saldo: 100,
          ...userState,
        });
        Notify("Registro exitoso", "success");
        router.push("/login");

        this.isLoading = false;
      } catch (error) {
        Notify(
          "En este momento presentamos fallas en el servicio, discúlpanos",
          "error"
        );
        this.isLoading = false;
      }
    },

    async loginUser(userState) {
      this.isLoading = true;
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          userState.correo,
          userState.password
        );
        const userId = userCredential.user.uid;
        const docRef = query(
          collection(db, "users"),
          where("id", "==", userId)
        );
        const docSnap = await getDocs(docRef);
        if (!docSnap.empty) {
          docSnap.forEach((doc) => {
            this.user = doc.data();
            router.push("/account");
          });
        }
        this.isLoading = false;
      } catch (error) {
        console.log(error.message);
        this.isLoading = false;
        Notify("Los datos no coinciden", "error");
      }
    },
  },
});
