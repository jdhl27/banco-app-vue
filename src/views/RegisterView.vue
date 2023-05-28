<template>
  <div class="register-container">
    <div class="register-header">
      <h1>Registro de cuenta bancaria</h1>
      <p>Por favor ingrese los siguientes datos:</p>
    </div>
    <form class="register-form" @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" v-model="nombre" required />
          </div>
          <div class="form-group">
            <label for="apellido">Apellido</label>
            <input type="text" id="apellido" v-model="apellido" required />
          </div>
          <div class="form-group">
            <label for="cedula">Cédula de ciudadanía</label>
            <input type="text" id="cedula" v-model="cedula" required />
          </div>
          <div class="form-group">
            <label for="genero">Género</label>
            <select id="genero" v-model="genero" required>
              <option value="">Seleccione un género</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div class="form-group">
            <label for="estadoCivil">Estado Civil</label>
            <select id="estadoCivil" v-model="estadoCivil" required>
              <option value="">Seleccione una opción</option>
              <option value="soltero">Soltero/a</option>
              <option value="soltero">Unión Libre</option>
              <option value="casado">Casado/a</option>
              <option value="divorciado">Divorciado/a</option>
              <option value="viudo">Viudo/a</option>
            </select>
          </div>
          <div class="form-group">
            <label for="direccion">Dirección de residencia</label>
            <input type="text" id="direccion" v-model="direccion" required />
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label for="nacionalidad">Nacionalidad</label>
            <input
              type="text"
              id="nacionalidad"
              v-model="nacionalidad"
              required
            />
          </div>
          <div class="form-group">
            <label for="ciudad">Ciudad</label>
            <select id="ciudad" v-model="ciudad" required>
              <option value="">Seleccione una ciudad</option>
              <option value="Bogotá">Bogotá</option>
              <option value="Medellín">Medellín</option>
              <option value="Cali">Cali</option>
              <option value="Barranquilla">Barranquilla</option>
              <option value="Cartagena">Cartagena</option>
            </select>
          </div>
          <div class="form-group">
            <label for="estadoLaboral">Estado Laboral</label>
            <select id="estadoLaboral" v-model="estadoLaboral" required>
              <option value="">Seleccione una opción</option>
              <option value="empleado">Empleado/a</option>
              <option value="independiente">Independiente</option>
              <option value="desempleado">Desempleado/a</option>
              <option value="estudiante">Estudiante</option>
              <option value="jubilado">Jubilado/a</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono</label>
            <input type="text" id="telefono" v-model="telefono" required />
          </div>
          <div class="form-group">
            <label for="correo">Correo electrónico</label>
            <input type="email" id="correo" v-model="correo" required />
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" v-model="password" required />
          </div>
        </div>
      </div>

      <button type="submit">Registrar cuenta</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/store/userFire.js";

const usuariosS = useUserStore();

const nombre = ref("");
const apellido = ref("");
const cedula = ref("");
const genero = ref("");
const estadoCivil = ref("");
const direccion = ref("");
const nacionalidad = ref("");
const ciudad = ref("");
const estadoLaboral = ref("");
const telefono = ref("");
const correo = ref("");
const password = ref("");

const handleSubmit = async () => {
  const userData = {
    nombre: nombre.value,
    apellido: apellido.value,
    cedula: cedula.value,
    genero: genero.value,
    estadoCivil: estadoCivil.value,
    direccion: direccion.value,
    nacionalidad: nacionalidad.value,
    ciudad: ciudad.value,
    estadoLaboral: estadoLaboral.value,
    telefono: telefono.value,
    correo: correo.value,
    password: password.value,
  };
  await usuariosS.registerUser(userData);
};
</script>

<style scoped>
.register-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #9e9eaf40;
}

.register-header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

p {
  font-size: 1rem;
  color: #0e1523;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  font-weight: 600;
  display: block;
  color: #141e32;
}

input,
select {
  padding: 0.8rem;
  border-radius: 5px;
  border: none;
  background-color: #f2f2f2;
  font-size: 1rem;
  margin-top: 0.5rem;
  width: 100%;
  color: #1a1a1a;
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 10'%3E%3Cpolygon points='0,0 30,0 15,10'/%3E%3C/svg%3E");
  padding-right: 1.5rem;
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 11px 18px;
}

button[type="submit"] {
  background-color: #141e32;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1rem;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button[type="submit"]:hover {
  background-color: #0e1523;
}

.btn-primary {
  background-color: #141e32;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.btn-primary:hover {
  background-color: #0e1523;
}
</style>
