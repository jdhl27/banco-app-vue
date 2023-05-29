<template>
  <div id="benefits" style="padding: 100px 0">
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
          DAVICASPA EN ALIANZA CON MASTERCARD
        </p>
        <h2 class="section-title">Lo mejor de tu Davicaspa Card</h2>
      </div>
      <div class="row">
        <div
          class="col-lg-6"
          v-for="benefit in benefits"
          :key="benefit.id"
          style="margin-bottom: 30px"
        >
          <div class="coupon-card">
            <div class="card-body">
              <img
                v-if="benefit.image"
                :src="benefit.image"
                class="card-img-left"
                alt="Benefit Image"
              />
              <div>
                <h5 class="card-title">{{ benefit.title }}</h5>
                <p class="card-text">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import netflixImg from "@/assets/netflix.png";
import rappiImg from "@/assets/rappi.png";
import exitoImg from "@/assets/exito.png";
import despegarImg from "@/assets/despegar.png";
import mercadolibreImg from "@/assets/mercadolibre.png";
import hbomaxImg from "@/assets/hbo.png";

export default {
  data() {
    return {
      benefits: [
        {
          id: 1,
          image: netflixImg,
          title: "Descuento en Netflix",
          description: "Ahorra un 20% en tu suscripción mensual de Netflix.",
        },
        {
          id: 2,
          image: rappiImg,
          title: "Envío gratis en Rappi",
          description: "Disfruta de envíos gratuitos en tus pedidos de Rappi.",
        },
        {
          id: 3,
          image: exitoImg,
          title: "Descuentos en Éxito",
          description: "Obtén descuentos exclusivos en tus compras en Éxito.",
        },
        {
          id: 4,
          image: despegarImg,
          title: "Ofertas en Despegar",
          description:
            "Encuentra las mejores ofertas en vuelos y hoteles en Despegar.",
        },
        {
          id: 5,
          image: mercadolibreImg,
          title: "Descuentos en Mercado Libre",
          description:
            "Aprovecha descuentos especiales en tus compras en Mercado Libre.",
        },
        {
          id: 6,
          image: hbomaxImg,
          title: "Acceso a HBO Max",
          description:
            "Disfruta de una suscripción gratuita a HBO Max por 3 meses.",
        },
        {
          id: 7,
          title: "Beneficios en muchas más cosas",
          description: "",
        },
      ],
    };
  },
};
</script>

<style>
/* Estilos CSS adicionales para los beneficios */

#benefits .container-title {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
}

#benefits .section-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 40px;
  line-height: 1.4em;
}

#benefits .coupon-card {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 13px rgba(28, 28, 87, 0.1);
  transition: transform 0.3s;
  border: 0 !important;
}

#benefits .coupon-card .card-body {
  padding: 20px;
  display: flex;
  align-items: center;
}

#benefits .coupon-card .card-img-left {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 20px;
}

#benefits .coupon-card .card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

#benefits .coupon-card .card-text {
  font-size: 16px;
  color: #6c757d;
}
</style>
