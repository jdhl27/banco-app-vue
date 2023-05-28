<template>
  <footer class="footer bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 d-flex align-items-center">
          <ul class="footer-news-list">
            <img
              style="
                width: 43%;
                background-color: #fff;
                padding: 5px;
                border-radius: 24px;
              "
              src="src/assets/davicaspa_logo.png"
              alt="Imagen atractiva"
            />
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h5 class="footer-heading">Información de Contacto</h5>
          <p class="footer-text">Avenida 33 #45-45</p>
          <p class="footer-text">Medellín, Antioquia, Colombia</p>
          <p class="footer-text">Teléfono: (604) 456-7890</p>
          <p class="footer-text">Correo Electrónico: info@davicaspa.com</p>
        </div>
        <div class="col-lg-4 col-md-6">
          <h5 class="footer-heading">Redes Sociales</h5>
          <ul class="footer-social-list">
            <li>
              <a href="#" class="footer-social-link">
                <i class="bi bi-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#" class="footer-social-link">
                <i class="bi bi-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#" class="footer-social-link">
                <i class="bi bi-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="#" class="footer-social-link">
                <i class="bi bi-linkedin"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="footer-hr" />
      <div class="row">
        <div class="col-md-6">
          <p class="footer-text">
            &copy; {{ currentYear }} Davicaspa. Todos los derechos reservados.
          </p>
        </div>
        <div class="col-md-6 text-md-end">
          <ul class="footer-legal-list">
            <li class="footer-legal-item">
              <a href="#" class="footer-legal-link">Términos y Condiciones</a>
            </li>
            <li class="footer-legal-item">
              <a href="#" class="footer-legal-link">Política de Privacidad</a>
            </li>
            <li class="footer-legal-item">
              <a href="#" class="footer-legal-link">Aviso Legal</a>
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
i {
  margin: 14px;
}
.footer {
  color: #fff;
  padding: 100px 0 25px 0;
  margin-top: 65px;
}

.footer-heading {
  color: #fff;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.footer-text {
  font-size: 14px;
  line-height: 26px;
  color: #6b7079;
}

.footer-social-list {
  padding-left: 0;
  list-style: none;
}
.footer-social-list li {
  margin: 17px 0;
}

.footer-social-link {
  color: #fff;
  margin-right: 10px;
  text-decoration: none;
}

.footer-social-link:hover {
  color: #0066cc;
}

.footer-news-list {
  padding-left: 0;
  list-style: none;
}

.footer-news-link {
  color: #fff;
  margin-bottom: 10px;
  text-decoration: none;
}

.footer-news-link:hover {
  color: #0066cc;
}

.footer-hr {
  border-top-color: rgba(255, 255, 255, 0.1);
  margin-top: 30px;
  margin-bottom: 30px;
}

.footer-legal-list {
  padding-left: 0;
  list-style: none;
}

.footer-legal-item {
  display: inline-block;
  margin-right: 10px;
}

.footer-legal-link {
  color: #fff;
}
.footer-legal-link:hover {
  color: gray;
}
</style>
