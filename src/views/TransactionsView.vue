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
            <label for="cuentaDestino">Número de cuenta</label>
            <input
              type="text"
              id="cuentaDestino"
              v-model="cuentaDestino"
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
      <div
        class="transaction-container"
        style="overflow-y: auto; height: 431px"
      >
        <h2>Transacciones Bancarias</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cuenta</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody v-if="usuariosS?.user?.transactions">
            <tr
              v-for="(transaction, index) in usuariosS?.user?.transactions"
              @click="onShowDetail(transaction)"
              :key="index"
              class="header-table"
            >
              <td>{{ transaction?.fecha }}</td>
              <td>
                {{
                  transaction.enviadaPorUsuario
                    ? transaction.cuentaDestino
                    : transaction.cuentaRemitente
                }}
              </td>
              <td
                :class="{
                  'text-success': !transaction.enviadaPorUsuario,
                  'text-danger': transaction.enviadaPorUsuario,
                }"
              >
                {{
                  transaction.enviadaPorUsuario
                    ? "-" + transaction.cantidad
                    : transaction.cantidad
                }}
              </td>
            </tr>
          </tbody>
          <div v-else class="loader-overlay">
            <div class="loader"></div>
          </div>
        </table>
      </div>
    </div>
  </div>
  <detail-transaction
    v-if="showDetail"
    :transaction="transactionDetail"
    :closeModal="onShowDetail"
  />
  <ConfirmationTransaction
    v-if="showConfirmation"
    :transaction="transactionConfirmation"
    :confirmTransaction="sentTransaction"
    :cancelConfirmation="onShowConfirmation"
  />
</template>

<script setup>
import { ref } from "vue";
import { Notify } from "../notify.js";
import DetailTransaction from "../components/DetailTransaction.vue";
import ConfirmationTransaction from "../components/ConfirmationTransaction.vue";
import { useUserStore } from "@/store/userFire.js";

const usuariosS = useUserStore();

const showDetail = ref(false);
const showConfirmation = ref(false);
const transactionDetail = ref(null);
const transactionConfirmation = ref(null);
const cuentaDestino = ref("");
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
  if (cantidad.value > usuariosS?.user.saldo) {
    Notify(
      `Saldo insuficiente, te faltarían $${
        cantidad.value - usuariosS?.user.saldo
      } para realizar operación`,
      "error"
    );
    return;
  }
  if (cuentaDestino.value === usuariosS?.user?.cuentaBancaria) {
    Notify("No puedes enviar al mismo producto", "error");
    return;
  }
  if (
    cuentaDestino.value.length > 8 &&
    cantidad.value > 0 &&
    tipo.value.length > 0
  ) {
    transactionConfirmation.value = {
      cuentaDestino: cuentaDestino.value,
      tipo: tipo.value,
      cantidad: cantidad.value,
    };
    onShowConfirmation(); // true
  } else {
    Notify("Rellena los datos");
  }
};

const sentTransaction = async () => {
  const res = await usuariosS.registerTransaction(
    transactionConfirmation.value
  );
  if (res) {
    onShowConfirmation(); // false
    const user = await usuariosS.currentUser();
    cuentaDestino.value = null;
    tipo.value = "";
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

.loader-overlay {
  position: absolute;
  width: 466px;
  height: 283px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
}

.loader {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #0e1523;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
