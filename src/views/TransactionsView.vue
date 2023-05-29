<template>
  <div class="row d-flex justify-content-center" style="max-width: 100%">
    <div class="col-md-5">
      <div class="transaction-container">
        <div class="transaction-header">
          <h1>Nueva Transacción</h1>
          <p>Ingrese los datos de la transacción</p>
        </div>
        <form class="transaction-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="numeroCuenta">Número de cuenta</label>
            <input
              type="text"
              id="numeroCuenta"
              v-model="numeroCuenta"
              required
            />
          </div>
          <div class="form-group">
            <label for="tipo">Tipo de cuenta</label>
            <select id="tipo" v-model="tipo" required>
              <option value="">Seleccione un tipo</option>
              <option value="Ahorros">Ahorros</option>
              <option value="Corriente">Corriente</option>
            </select>
          </div>
          <div class="form-group">
            <label for="cantidad">Cantidad</label>
            <input type="number" id="cantidad" v-model="cantidad" required />
          </div>
          <button
            type="submit"
            style="padding: 16px 0; background-color: #141f31"
          >
            Enviar transacción
          </button>
        </form>
      </div>
    </div>
    <div class="col-md-4">
      <div class="transaction-container">
        <h2>Transacciones Bancarias</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cuenta</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(transaction, index) in transactions"
              @click="onShowDetail(transaction)"
              :key="index"
              class="header-table"
            >
              <td>{{ transaction?.date }}</td>
              <td>{{ transaction.description }}</td>
              <td
                :class="{
                  'text-success': transaction.amount >= 0,
                  'text-danger': transaction.amount < 0,
                }"
              >
                {{ transaction.amount }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <detail-trasaction
    v-if="showDetail"
    :transaction="transactionDetail"
    :closeModal="onShowDetail"
  />
  <ConfirmationTrasaction
    v-if="showConfirmation"
    :transaction="transactionConfirmation"
    :confirmTransaction="sentTransaction"
    :cancelConfirmation="onShowConfirmation"
  />
</template>

<script setup>
import { ref } from "vue";
import { Notify } from "../notify.js";
import DetailTrasaction from "../components/DetailTrasaction.vue";
import ConfirmationTrasaction from "../components/ConfirmationTrasaction.vue";
import { useUserStore } from "@/store/userFire.js";

const usuariosS = useUserStore();

const transactions = ref([
  {
    numero: "16289283982",
    date: "2023-05-11",
    description: "Pago de nómina",
    amount: 5000.0,
  },
  {
    numero: "16289283982",
    date: "2023-05-10",
    description: "Pago de luz",
    amount: -80.0,
  },
  {
    numero: "16289283982",
    date: "2023-05-09",
    description: "Depósito de cliente",
    amount: 1200.0,
  },
]);

const showDetail = ref(false);
const showConfirmation = ref(false);
const transactionDetail = ref(null);
const transactionConfirmation = ref(null);
const numeroCuenta = ref("");
const cantidad = ref("");
const tipo = ref("");

const onShowDetail = (transaction) => {
  showDetail.value = !showDetail.value;
  if (showDetail.value) {
    transactionDetail.value = transaction;
  } else {
    transactionDetail.value = null;
  }
};

const onShowConfirmation = () => {
  showConfirmation.value = !showConfirmation.value;
};

const handleSubmit = () => {
  console.log(numeroCuenta.value);
  console.log(cantidad.value);
  console.log(tipo.value);
  if (
    numeroCuenta.value.length > 0 &&
    cantidad.value > 0 &&
    tipo.value.length > 0
  ) {
    transactionConfirmation.value = {
      cuenta: numeroCuenta.value,
      description: tipo.value,
      amount: cantidad.value,
    };
    onShowConfirmation(); // true
  } else {
    Notify("Rellena los datos");
  }
};

const sentTransaction = async () => {
  onShowConfirmation(); // false
  const dataTrasaction = {
    numeroCuenta: numeroCuenta.value,
    tipo: tipo.value,
    cantidad: cantidad.value,
  };
  const res = await usuariosS.registerTransaction(dataTrasaction);
  if (res) {
    numeroCuenta.value = null;
    tipo.value = null;
    cantidad.value = null;
  }
};
</script>

<style scoped>
.transaction-container {
  max-width: 707px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #8080804d;
}

h2 {
  font-size: 2rem;
}

.transaction-form {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="number"],
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  display: block;
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

table {
  width: 100%;
  margin-top: 2rem;
  border-collapse: collapse;
}

.header-table {
  cursor: pointer;
}

.header-table:hover {
  background-color: #6c6c6c30;
}

th,
td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.text-success {
  color: green;
}

.text-danger {
  color: red;
}
</style>
