<template>
  <div class="principal">
    <div class="sub-principal mx-auto d-block d-md-flex">
      <div class="info-icons d-none d-md-block">
        <img src="../assets/laika_footer.png" alt="" class="d-flex mx-auto" />
        <p>Siguenos en:</p>
        <div class="icons">
          <span>
            <i class="fab fa-youtube"></i>
          </span>
          <span>
            <i class="fab fa-instagram"></i>
          </span>
          <span>
            <i class="fab fa-facebook-square"></i>
          </span>
        </div>
      </div>
      <div class="info box-info">
        <b>ACERCA DE LAIKA</b>
        <p class="d-none d-md-block">Sobre Laika</p>
        <p class="d-none d-md-block">Servicios</p>
        <p class="d-none d-md-block">Trabaja con nosotros</p>
        <p class="d-none d-md-block">Blog</p>
        <p class="d-none d-md-block">Términos y condiciones</p>
        <span class="d-flex d-md-none">
          <i class="fas fa-chevron-right"></i>
        </span>
      </div>
      <div class="info box-info">
        <b>LINKS DE INTERÉS</b>
        <p class="d-none d-md-block">Preguntas frecuentes</p>
        <p class="d-none d-md-block">¿Cómo comprar en Laika?</p>
        <p class="d-none d-md-block">Política de Privacidad</p>
        <p class="d-none d-md-block">Contáctenos</p>
        <p class="d-none d-md-block">Políticas de Entrega</p>
        <span class="d-flex d-md-none">
          <i class="fas fa-chevron-right"></i>
        </span>
      </div>
      <div class="info box-info">
        <b>INFORMACIÓN</b>
        <p class="d-none d-md-block">Teléfono: 3009108496</p>
        <p class="d-none d-md-block">servicioclientes@laika.com.co</p>
        <p class="d-none d-md-block">Bogotá D.C., Colombia</p>
        <span class="d-flex d-md-none">
          <i class="fas fa-chevron-right"></i>
        </span>
      </div>
      <div class="info">
        <b>SUBSCRÍBETE</b>
        <p>Recibe noticias y promociones al instante.</p>
        <div class="input">
          <input
            type="text"
            class="form-control"
            placeholder="Correo electrónico"
          />
          <button><i class="fas fa-chevron-right"></i></button>
        </div>
        <div class="d-flex">
          <input
            type="checkbox"
            class="formControl check"
            style="margin-top: 3px"
          />
          <p style="font-size: 12px; margin-left: 2px; margin-top: 0px;">
            He leído y acepto las Políticas de privacidad.
          </p>
        </div>
      </div>
    </div>
    <div class="pay">
      <div class="row mx-auto">
        <img src="../assets/Mercado_pago.png" alt="" class="d-flex mx-auto" />
        <img src="../assets/MASTER.png" alt="" class="d-flex mx-auto" />
        <img src="../assets/VISA.png" alt="" class="d-flex mx-auto" />
        <img src="../assets/AMERICAN.png" alt="" class="d-flex mx-auto" />
        <img src="../assets/APP.png" alt="" class="d-flex mx-auto" />
        <img src="../assets/GOOGLEP.png" alt="" class="d-flex mx-auto" />
        <img src="../assets/huaweiGallery.png" alt="" class="d-flex mx-auto" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
  .principal {
    .sub-principal {
      display: block;
      .info {
        width: 100%;
      }
      .box-info {
        padding: 10px 10px;
        border: 1px solid lightgrey;
        margin-bottom: 10px;
        box-shadow: 0px 3px 10px 0px lightgrey;
        border-radius: 5px;
        align-items: center;
        display: flex;
        position: relative;
        span {
          width: fit-content;
          color: #5b4181;
          position: absolute;
          right: 10px;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .principal {
    .sub-principal {
      .info {
        width: 20%;
      }
    }
    .pay {
      padding: 30px;
      div {
        width: 80%;
      }
    }
  }
}
.principal {
  .sub-principal {
    width: 80%;
    .info-icons {
      width: 20%;
      p {
        margin: 0px;
        text-align: center;
        font-size: 20px;
        color: #5b4181;
      }
      .icons {
        width: fit-content;
        margin: auto;
        span {
          color: #5b4181;
          font-size: 35px;
          margin: 5px;
        }
      }
    }
    .info {
      p {
        color: #5b4181;
        cursor: pointer;
        margin-bottom: 0px;
        margin-top: 16px;
      }
      b {
        color: #5b4181;
        cursor: pointer;
      }
      .input {
        position: relative;
        align-items: center;
        display: flex;
        input {
          border-color: #5b4181;
        }
        button {
          background-color: #5b4181;
          border: 0px;
          color: white;
          width: 35px;
          border-radius: 4px;
          position: absolute;
          right: 6px;
        }
      }
      .check:checked:before {
        background-color: #5b4181;
      }
    }
  }
  .pay {
    background-color: #f0f1f3;
    div {
      img {
        height: 50px;
        width: auto;
      }
    }
  }
}
</style>