<script setup>
import Footer from "../components/Footer.vue";
</script>
<template>
  <div class="row">
    <div class="col-md-6">
      <div class="transaction-container">
        <div class="transaction-header">
          <h1>Nueva Transacción</h1>
          <p>Ingrese los datos de la transacción</p>
        </div>
        <form class="transaction-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="nombre">Nombre de usuario</label>
            <input type="text" id="nombre" v-model="nombre" required />
          </div>
          <div class="form-group">
            <label for="cantidad">Cantidad</label>
            <input type="number" id="cantidad" v-model="cantidad" required />
          </div>
          <div class="form-group">
            <label for="tipo">Tipo de transacción</label>
            <select id="tipo" v-model="tipo" required>
              <option value="">Seleccione un tipo</option>
              <option value="Compra">Compra</option>
              <option value="Venta">Venta</option>
            </select>
          </div>
          <div class="form-group">
            <label for="fecha">Fecha</label>
            <input type="date" id="fecha" v-model="fecha" required />
          </div>
          <button type="submit">Enviar transacción</button>
        </form>
      </div>
    </div>
    <div class="col-md-6">
      <div class="transaction-container">
        <h2>Transacciones Bancarias</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(transaction, index) in transactions" :key="index">
              <td>{{ transaction.date }}</td>
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
  <!-- <Footer /> -->
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          date: "2023-05-11",
          description: "Pago de nómina",
          amount: 5000.0,
        },
        {
          date: "2023-05-10",
          description: "Pago de luz",
          amount: -80.0,
        },
        {
          date: "2023-05-09",
          description: "Depósito de cliente",
          amount: 1200.0,
        },
      ],
    };
  },
};
</script>

<style scoped>
.transaction-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}

.table th,
.table td {
  border: 1px solid #dee2e6;
  padding: 0.75rem;
  text-align: left;
  vertical-align: top;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}

.table .table {
  background-color: #fff;
}

.table-sm th,
.table-sm td {
  padding: 0.3rem;
}

.table-bordered {
  border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  font-weight: 400;
  display: block;
}

input,
select {
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: #f2f2f2;
  font-size: 1rem;
  margin-top: 0.5rem;
  width: 100%;
}

button[type="submit"] {
  background-color: #0066cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button[type="submit"]:hover {
  background-color: #004499;
}
</style>
