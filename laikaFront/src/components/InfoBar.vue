<template>
  <div class="col-12 row principal">
    <div class="row pack-elements">
      <div class="element d-flex boder">
        <span>
          <i class="fas fa-user-shield"></i>
        </span>
        <p>Compras seguras online</p>
      </div>
      <div class="element d-flex boder">
        <span>
          <i class="fas fa-hand-holding-usd"></i>
        </span>
        <p>Pago contra entrega</p>
      </div>
      <div class="element d-flex">
        <span>
          <i class="fas fa-truck-moving"></i>
        </span>
        <p>Entregas el mismo día</p>
      </div>
    </div>
    <div class="row pack-elements" style="position: absolute; right: 65px">
      <div class="element d-flex" v-on:click="copy()">
        <div class="d-flex boder">
          <p style="margin-right: 10px">Llámanos</p>
          <span style="margin-right: 10px">
            <i class="fas fa-phone-square"></i>
          </span>
        </div>
        <p style="margin-left: 10px; cursor: pointer">3009108496</p>
      </div>
      <div class="element d-flex">
        <p>Escribenos</p>
        <span>
          <a href="https://www.youtube.com/c/LaikaUniversoPeludo" target="_blank">
            <i class="fab fa-youtube" style="margin-left: 10px; color: white"></i
          ></a>
          <a href="https://www.instagram.com/laikamascotas" target="_blank">
            <i class="fab fa-instagram-square" style="margin-left: 10px; color: white"></i
          ></a>
          <a href="https://www.facebook.com/Laikamascotascolombia" target="_blank">
            <i class="fab fa-facebook-square" style="margin-left: 10px; color: white"></i
          ></a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBar",
  methods: {
    //Copy to clipboard
    copy() {
      navigator.clipboard.writeText("3009108496");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.principal {
  background-color: #020005;
  height: 4vh;
  align-items: center;
  margin: 0;
  .pack-elements {
    width: fit-content;
    margin-left: 30px;
    .element {
      width: fit-content;
      padding: 0px;
      padding-left: 10px;
      padding-right: 10px;
      span {
        color: white;
      }
      p {
        color: white;
        margin-bottom: 0px;
        margin-left: 5px;
      }
    }
    .boder {
      border-right: 2px solid white;
    }
  }
}
</style>
