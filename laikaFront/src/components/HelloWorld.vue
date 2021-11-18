<template>
  <info-bar class="d-none d-md-flex"></info-bar>
  <header-component></header-component>
  <categoria></categoria>
  <store></store>
  <footer-component></footer-component>
  <div class="sugerencias">
    <div class="back"></div>
    <span>
      <i class="fas fa-comment-alt"></i>
    </span>
    <b>Sugerencias</b>
  </div>
  <div class="chat">
    <span>
      <i class="fas fa-comment"></i>
    </span>
  </div>
  <div class="whatsapp">
    <img src="../assets/whatsapp_1.png" alt="" />
  </div>
</template>

<script>
import InfoBar from "./InfoBar";
import HeaderComponent from "./Header";
import Categoria from "./Categoria";
import Store from "./Store";
import FooterComponent from "./Footer.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    InfoBar,
    HeaderComponent,
    Categoria,
    Store,
    FooterComponent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.sugerencias {
  width: fit-content;
  padding: 13px;
  background-color: #e35059;
  opacity: 0.8;
  border-radius: 5px 5px 0px 0px;
  transform: rotate(-90deg);
  position: fixed;
  top: 336px;
  right: -43px;
  b {
    color: white;
  }
  span {
    margin-right: 5px;
    color: white;
  }
}

.chat {
  width: fit-content;
  width: 70px;
  height: 70px;
  background-color: #5b4181;
  border-radius: 100%;
  position: fixed;
  right: 10px;
  bottom: 10px;
  align-items: center;
  display: flex;
  span {
    font-size: 40px;
    color: white;
    text-align: center;
    margin: auto;
    display: flex;
    width: fit-content;
  }
}

.whatsapp {
  width: fit-content;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  position: fixed;
  right: 10px;
  bottom: 100px;
  align-items: center;
  display: flex;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 20px -1px grey;
  img {
    width: 70%;
    height: auto;
    display: flex;
    margin: auto;
  }
}
</style>
