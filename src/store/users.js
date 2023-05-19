import { defineStore } from "pinia";
import { ref } from "vue";

export const userStore = defineStore("usuario", () => {
  const usuarios = ref([]);

  const usuariosGlobales = localStorage.getItem("Usuarios");
  if (usuariosGlobales) {
    usuarios.value = JSON.parse(usuariosGlobales);
  }

  const registrarUsuario = (usuario) => {
    console.log(usuario);
    usuarios.value.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios.value));
  };
  const consultarUsuarios = () => {
    return usuarios;
  };

  return {
    usuarios,
    registrarUsuario,
  };
});
