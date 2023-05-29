<template>
  <div>
    <div class="modal-overlay">
      <div class="modal-container">
        <div class="modal-header">
          <img
            style="width: 42%"
            src="src/assets/davicaspa_logo.png"
            alt="Imagen atractiva"
          />
          <button @click="closeModal" class="close-button">
            <span style="font-size: 37px" aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h2>Detalles de la transacción</h2>
          #{{ transaction.numero }}
          <div class="transaction-details">
            <div class="info-row">
              <strong>Fecha:</strong>
              <span>{{ transaction.date }}</span>
            </div>
            <div class="info-row">
              <strong>Descripción:</strong>
              <span>{{ transaction.description }}</span>
            </div>
            <div class="info-row">
              <strong>Monto:</strong>
              <span
                :class="
                  transaction.amount >= 0 ? 'text-success' : 'text-danger'
                "
                >{{ transaction.amount }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    transaction: {
      type: Object,
      required: true,
    },
    closeModal: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background-color: #fff;
  border-radius: 5px;
  max-width: 500px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.bank-logo {
  height: 30px;
}

.close-button {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 20px;
}

.modal-body {
  padding-bottom: 20px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.transaction-details {
  margin-top: 10px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.text-success {
  color: green;
}

.text-danger {
  color: red;
}
</style>
