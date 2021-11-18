<template>
  <div class="principal mx-auto">
    <div class="tittle">
      <h3>
        <b> Categoría </b>
      </h3>
    </div>
    <div class="elements row mx-auto">
      <div
        class="cat-buttons"
        id="alimento"
        v-on:click="clickCategory('alimento')"
      >
        <img
          src="../assets/ICONS_COTEGORY_ALIMENTOS.png"
          alt=""
          class="img-cat"
          id="img-alimento"
        />
        <b class="text-cat" id="text-alimento">Alimento</b>
      </div>
      <div class="cat-buttons" id="snack" v-on:click="clickCategory('snack')">
        <img
          src="../assets/ICONS_COTEGORY_SNACKS.png"
          alt=""
          class="img-cat"
          id="img-snack"
        />
        <b class="text-cat" id="text-snack">Snacks</b>
      </div>
      <div class="cat-buttons" id="farma" v-on:click="clickCategory('farma')">
        <img
          src="../assets/1614033964Categoria_farmacia.png"
          alt=""
          class="img-cat"
          id="img-farma"
        />
        <b class="text-cat" id="text-farma">Farmapet</b>
      </div>
      <div
        class="cat-buttons"
        id="higiene"
        v-on:click="clickCategory('higiene')"
      >
        <img
          src="../assets/1613668386Categoria_higiene_2.png"
          alt=""
          class="img-cat"
          id="img-higiene"
        />
        <b class="text-cat" id="text-higiene">Cuidado e higiene</b>
      </div>
      <div
        class="cat-buttons"
        id="juguete"
        v-on:click="clickCategory('juguete')"
      >
        <img
          src="../assets/1612554392Juguetes.png"
          alt=""
          class="img-cat"
          id="img-juguete"
        />
        <b class="text-cat" id="text-juguete">Juguetes</b>
      </div>
      <div
        class="cat-buttons"
        id="accesorio"
        v-on:click="clickCategory('accesorio')"
      >
        <img
          src="../assets/categoria_accesorios+(1).png"
          alt=""
          class="img-cat"
          id="img-accesorio"
        />
        <b class="text-cat" id="text-accesorio">Accesorios</b>
      </div>
      <div
        class="cat-buttons"
        id="petlover"
        v-on:click="clickCategory('petlover')"
      >
        <img
          src="../assets/1613595491Categoria_pet_owner.png"
          alt=""
          class="img-cat"
          id="img-petlover"
        />
        <b class="text-cat" id="text-petlover">Para PetLovers</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categoria",
  methods: {
    clickCategory(cat) {
      let buttons = document.getElementsByClassName("cat-buttons");
      let text = document.getElementsByClassName("text-cat");
      let img = document.getElementsByClassName("img-cat");
      for (let i = 0; i < buttons.length; i++) {
        buttons.item(i).style.backgroundColor = "#ffffff";
        text.item(i).style.color = "#000000";
        img.item(i).classList.remove("img-white");
      }
      document.getElementById(cat).style.backgroundColor = "#5b4181";
      document.getElementById("text-" + cat).style.color = "#ffffff";
      document.getElementById("img-" + cat).classList.add("img-white");
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
  .cat-buttons {
    width: 100% !important;
  }
}

.principal {
  width: 80%;
  margin-top: 20px;
  .tittle {
    b {
      color: #5b4181;
    }
  }
  .elements {
    width: 80%;
    div {
      align-items: center;
      width: fit-content;
      margin: auto;
      border: 1px solid lightgray;
      border-radius: 8px;
      box-shadow: 0px 3px 10px 0px lightgrey;
      margin-top: 10px;
      padding: 10px 25px 10px 25px;
      cursor: pointer;
      img {
        width: 30px;
        height: auto;
      }
      b {
        margin-left: 10px;
      }
    }
  }
}
.img-white {
  filter: hue-rotate(60deg) brightness(500%);
}
</style>
