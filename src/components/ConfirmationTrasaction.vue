<template>
  <div class="confirmation-modal">
    <div class="modal-overlay">
      <div class="modal-container">
        <div class="modal-header">
          <img
            src="src/assets/davicaspa_logo.png"
            alt="Logo Davicaspa"
            class="logo"
          />
          <button @click="cancelConfirmation" class="close-button">
            &times;
          </button>
        </div>
        <h2>Confirmar Transacción</h2>
        <div class="modal-body">
          <p>Por favor, confirma la siguiente transacción:</p>
          <div class="transaction-details">
            <div class="info-row">
              <strong>Cuenta destino:</strong>
              <span>{{ transaction.cuenta }}</span>
            </div>
            <div class="info-row">
              <strong>Descripción:</strong>
              <span>{{ transaction.description }}</span>
            </div>
            <div class="info-row">
              <strong>Monto:</strong>
              <span>${{ transaction.amount }}</span>
            </div>
          </div>
          <p class="current-date">Fecha actual: {{ currentDate }}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="cancelConfirmation"
          >
            Cancelar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="confirmTransaction"
          >
            Confirmar
          </button>
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
    cancelConfirmation: {
      type: Function,
      required: true,
    },
    confirmTransaction: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      currentDate: null,
    };
  },
  mounted() {
    this.currentDate = this.getCurrentDate();
  },
  methods: {
    getCurrentDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
  },
};
</script>

<style scoped>
.confirmation-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}

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

.logo {
  width: 42%;
}

.close-button {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 40px;
}

.modal-body {
  padding-bottom: 20px;
}

.modal-title {
  color: #141e32;
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

.modal-content {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  color: #141e32;
}

.modal-footer {
  padding: 1.5rem 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.btn-secondary {
  color: #141e32;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.btn-secondary:hover {
  background-color: #fff;
  color: #141e3269;
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

.current-date {
  font-size: 0.9rem;
  margin-top: 10px;
  text-align: right;
}
</style>
