<template>
  <footer class="footer bg-dark">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <h5 class="text-white mb-3">Información de Contacto</h5>
          <p class="text-muted">1234 Calle del Banco</p>
          <p class="text-muted">Ciudad, Estado, Código Postal</p>
          <p class="text-muted">Teléfono: (123) 456-7890</p>
          <p class="text-muted">Correo Electrónico: info@mibanco.com</p>
        </div>
        <div class="col-lg-4 col-md-6">
          <h5 class="text-white mb-3">Redes Sociales</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#"><i class="bi bi-facebook"></i> Facebook</a>
            </li>
            <li>
              <a href="#"><i class="bi bi-twitter"></i> Twitter</a>
            </li>
            <li>
              <a href="#"><i class="bi bi-instagram"></i> Instagram</a>
            </li>
            <li>
              <a href="#"><i class="bi bi-linkedin"></i> LinkedIn</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4">
          <h5 class="text-white mb-3">Noticias Recientes</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#" class="text-muted">Tasas de Interés en Aumento</a>
            </li>
            <li>
              <a href="#" class="text-muted"
                >Nueva Sucursal Abierta en Ciudad X</a
              >
            </li>
            <li>
              <a href="#" class="text-muted"
                >Promoción Especial de Tarjeta de Crédito</a
              >
            </li>
            <li>
              <a href="#" class="text-muted"
                >Consejos de Ahorro y Finanzas Personales</a
              >
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <p class="text-muted">
            &copy; {{ currentYear }} Mi Banco. Todos los derechos reservados.
          </p>
        </div>
        <div class="col-md-6 text-md-end">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#" class="text-muted">Términos y Condiciones</a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-muted">Política de Privacidad</a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-muted">Aviso Legal</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  color: #fff;
  padding: 40px 0;
  margin-top: 65px;
}

.footer a {
  color: #fff;
}

.footer hr {
  border-top-color: rgba(255, 255, 255, 0.1);
  margin-top: 30px;
  margin-bottom: 30px;
}

.footer h5 {
  color: #fff;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.footer p {
  font-size: 14px;
  line-height: 26px;
}

.footer ul li {
  margin-bottom: 10px;
}

.footer ul li:last-child {
  margin-bottom: 0;
}

.footer ul.list-inline li {
  display: inline-block;
  margin-right: 10px;
}

.footer ul.list-unstyled {
  padding-left: 0;
  list-style: none;
}
</style>
