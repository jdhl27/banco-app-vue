<template>
  <div
    id="information"
    style="background-color: rgba(28, 28, 87, 0.05); padding: 100px 0"
  >
    <div class="container">
      <div class="container-title">
        <p
          style="
            color: rgba(20, 30, 50, 0.47);
            letter-spacing: 0.06em;
            text-transform: uppercase;
            line-height: 1.125em;
          "
        >
          ¿POR QUÉ DAVICASPA?
        </p>
        <h2 class="section-title">
          Davicaspa te ofrece una solución financiera con todo
        </h2>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-md-6"
          v-for="card in cards"
          :key="card.id"
          style="margin: 30px 0"
        >
          <div
            class="card text-center d-flex align-items-center"
            style="padding: 55px 11px; height: 450px"
          >
            <img :src="card.image" class="card-img-top" alt="Card Image" />
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import securityImg from "@/assets/security.png";
import moneyImg from "@/assets/money.png";
import financeImg from "@/assets/finance.png";
import tarjetaImg from "@/assets/tarjeta.png";
import startImg from "@/assets/start.png";
import questionImg from "@/assets/question.png";

export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          image: securityImg,
          title: "Seguridad",
          description:
            "Seguridad biométrica, tecnología 3DS, autenticación 2FA y todo el capital custodiado por Circle (r).",
        },
        {
          id: 2,
          image: moneyImg,
          title: "Dólares digitales USDC",
          description:
            "Cuenta global en la única moneda estable respaldada 1:1 con el dólar americano. Tu capital está protegido.",
        },
        {
          id: 3,
          image: financeImg,
          title: "#NoMásDevaluación",
          description:
            "Tener tu capital en USDC te protege de la devaluación. Ahora puedes tener una vida financiera en USDC.",
        },
        {
          id: 4,
          image: tarjetaImg,
          title: "Tarjeta inteligente",
          description:
            "Maneja tu tarjeta desde tu app. Desactiva con un click en caso de pérdida y controla tus compras.",
        },
        {
          id: 5,
          image: startImg,
          title: "Es Gratis",
          description:
            "Davicaspa es y será gratis. Siempre. Jamás te cobraremos una cuota de manejo o administración.",
        },
        {
          id: 6,
          image: questionImg,
          title: "Soporte personalizado",
          description:
            "Chatea con nuestro equipo de Servicio al Cliente, disponible los 7 días de la semana.",
        },
      ],
    };
  },
};
</script>

<style>
.container-title {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
}
.section-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 40px;
  line-height: 1.4em;
}

.card {
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 18px 30px rgba(28, 28, 87, 0.05);
  transition: transform 0.3s;
  border: 0 !important;
}

.card:hover {
  transform: translateY(-5px);
}

.card .card-img-top {
  width: 30%;
  object-fit: contain;
  margin: 30px 0;
}

.card .card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card .card-text {
  font-size: 16px;
  color: #6c757d;
}
</style>
