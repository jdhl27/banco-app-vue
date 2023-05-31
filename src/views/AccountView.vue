<template>
  <div class="user-info-container">
    <div class="user-info-header">
      <h1>{{ getSaludo() }}, {{ userData.nombre }}</h1>
    </div>
    <div class="user-info-body">
      <div class="row">
        <div class="col-md-6 container-table">
          <h3 style="text-align: center">Información personal</h3>
          <table class="user-info-table">
            <tbody>
              <tr v-for="field in personalInfoFields" :key="field.label">
                <th>{{ field.label }}:</th>
                <td>{{ field.value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-5">
          <div class="card mb-4">
            <div class="card-header">
              <h3 class="card-title">Información Financiera</h3>
            </div>
            <div class="card-body">
              <div class="info-row">
                <strong>Cuenta Bancaria:</strong>
                <span>{{ userData.cuentaBancaria }}</span>
              </div>
              <div class="info-row">
                <strong>Saldo:</strong>
                <span>${{ userData.saldo }}</span>
              </div>
            </div>
          </div>
          <router-link
            style="margin-right: 12px"
            class="btn btn-success"
            to="/transactions"
          >
            Gestionar transacciones
          </router-link>
          <div v-if="chartData" className="container-graph">
            <h3>Gráfico de transacciones enviadas</h3>
            <line-chart :chart-data="chartData" />
          </div>
          <div v-if="chartDataCircle" className="container-graph">
            <h3>Participación en transacciones</h3>
            <pie-chart :chart-data="chartDataCircle" />
          </div>
          <div v-if="chartDataTotal" className="container-graph">
            <h3>Total en transacciones</h3>
            <bar-chart :chart-data="chartDataTotal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/userFire.js";
import LineChart from "@/components/graph/LineChart.vue";
import PieChart from "@/components/graph/PieChart.vue";
import BarChart from "@/components/graph/BarChart.vue";

const usuariosS = useUserStore();
const userData = usuariosS.user;

const personalInfoFields = [
  { label: "Nombre", value: userData.nombre },
  { label: "Apellido", value: userData.apellido },
  { label: "Cédula", value: userData.cedula },
  { label: "Género", value: userData.genero },
  { label: "Estado Civil", value: userData.estadoCivil },
  { label: "Dirección", value: userData.direccion },
  { label: "Nacionalidad", value: userData.nacionalidad },
  { label: "Ciudad", value: userData.ciudad },
  { label: "Estado Laboral", value: userData.estadoLaboral },
  { label: "Teléfono", value: userData.telefono },
  { label: "Correo Electrónico", value: userData.correo },
];

// ------------------- Data grafico de linea
let chartData = null;

if (Array.isArray(userData.transactions)) {
  const data = userData.transactions
    .filter((transaction) => transaction.enviadaPorUsuario)
    .map((transaction, index) => ({
      x: "T #" + transaction.id,
      y: transaction.cantidad,
    }));

  chartData = {
    datasets: [
      {
        label: "Cantidad ($)",
        backgroundColor: "#42b983",
        pointBorderColor: "#fff",
        data: data,
      },
    ],
  };
}

// ------------------- Data grafico de pastel
let chartDataCircle = null;

const transaccionesEnviadas = userData.transactions.filter(
  (transaction) => transaction.enviadaPorUsuario
);

const transaccionesRecibidas = userData.transactions.filter(
  (transaction) => !transaction.enviadaPorUsuario
);

const totalTransacciones = userData.transactions.length;
const porcentajeEnviadas =
  (transaccionesEnviadas.length / totalTransacciones) * 100;
const porcentajeRecibidas =
  (transaccionesRecibidas.length / totalTransacciones) * 100;

chartDataCircle = {
  labels: ["Enviadas (%)", "Recibidas (%)"],
  datasets: [
    {
      data: [porcentajeEnviadas, porcentajeRecibidas],
      backgroundColor: ["#87c8f3", "#ffe39a"],
    },
  ],
};

// ------------------- Data grafico de barras
let chartDataTotal = null;

let totalEnviado = 0;
let totalRecibido = 0;

userData?.transactions.forEach((transaction) => {
  if (transaction.enviadaPorUsuario) {
    totalEnviado += transaction.cantidad;
  } else {
    totalRecibido += transaction.cantidad;
  }
});

chartDataTotal = {
  labels: ["Enviado ($)", "Recibido ($)"],
  datasets: [
    {
      label: "Total ($)",
      data: [totalEnviado, totalRecibido],
      backgroundColor: ["#87c8f3", "#ffe39a"],
    },
  ],
};

function getSaludo() {
  if (userData.genero === "masculino") {
    return "Bienvenido";
  } else if (userData.genero === "femenino") {
    return "Bienvenida";
  } else {
    return "Bienvenido/a";
  }
}
</script>

<style scoped>
.user-info-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  border-top: 1px solid #80808059;
}

.user-info-header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #141f31;
}

.card-header {
  background-color: #141f31;
  color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 1rem;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0;
}

.card-body {
  padding: 2rem;
  background-color: #fff;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
}

.col-md-6 {
  padding: 15px;
}

.container-table {
  max-width: 707px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #8080804d;
}

.user-info-table {
  width: 100%;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.user-info-table th,
.user-info-table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
  color: #1a1a1a;
}

.info-row strong {
  width: 150px;
}

.info-row span {
  flex: 1;
  margin-left: 10px;
}

.container-graph {
  margin-top: 42px;
  padding: 16px;
  background: #e1e1e142;
  border-radius: 12px;
}
</style>
