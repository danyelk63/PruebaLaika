<template>
  <div class="principal row">
    <div class="sub-principal d-flex mx-auto">
      <div class="d-flex d-md-none vertical-center menu-icon">
        <span> <i class="fas fa-bars"> </i></span>
      </div>
      <div class="col-md-1 icon vertical-center logo">
        <img src="../assets/principal-logo.png" alt="" href="/" />
      </div>
      <div class="col-md-5 vertical-center search-bar d-none d-md-flex">
        <input
          type="text"
          class="form-control"
          placeholder="Encuentra lo mejor para tu mascota."
        />
        <span>
          <i class="fas fa-search"></i>
        </span>
      </div>
      <div class="col-md-2 vertical-center city">
        <div>
          <img src="@/assets/bandera-colombia.png" alt="" />
          <b>BOG</b>
          <span>
            <i class="fas fa-chevron-down"></i>
          </span>
        </div>
      </div>
      <div class="col-md-2 vertical-center account d-none d-md-flex">
        <span>
          <i class="far fa-user"></i>
        </span>
        <b>Mi cuenta</b>
      </div>
      <div class="col-md-1 vertical-center cart">
        <span>
          <i class="fas fa-shopping-cart"></i>
          <div>
            <p>0</p>
          </div>
        </span>
      </div>
    </div>
    <div class="sub-principal d-flex mx-auto d-md-none d-flex">
      <div class="vertical-center search-bar w-100">
        <input
          type="text"
          class="form-control"
          placeholder="Encuentra lo mejor para tu mascota."
        />
        <span>
          <i class="fas fa-search"></i>
        </span>
      </div>
    </div>
  </div>
  <div class="menu">
    <div class="elements d-none d-md-flex">
      <!--Perro-->
      <div class="dropdown">
        <div>
          <img src="../assets/dog_menu.png" alt="" />
          <b>Compra para perro</b>
          <span>
            <i class="fas fa-chevron-down"></i>
          </span>
        </div>
        <div class="dropdown-content">
          <div>
            <img src="../assets/ICONS_COTEGORY_ALIMENTOS.png" alt="" />
            <b>Alimento</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/ICONS_COTEGORY_SNACKS.png" alt="" />
            <b>Snacks</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/1614033964Categoria_farmacia.png" alt="" />
            <b>Farmapet</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/1613668386Categoria_higiene_2.png" alt="" />
            <b>Cuidado e higiene</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/1612554392Juguetes.png" alt="" />
            <b>Juguetes</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/categoria_accesorios+(1).png" alt="" />
            <b>Accesorios</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/1613595491Categoria_pet_owner.png" alt="" />
            <b>Para PetLovers</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </div>
      <!--Gato-->
      <div class="dropdown">
        <div>
          <img src="../assets/cat_menu.png" alt="" />
          <b>Compra para gato</b>
          <span>
            <i class="fas fa-chevron-down"></i>
          </span>
        </div>
        <div class="dropdown-content">
          <div>
            <img src="../assets/ICONS_COTEGORY_ALIMENTOS.png" alt="" />
            <b>Alimento</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/ICONS_COTEGORY_SNACKS.png" alt="" />
            <b>Snacks</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/1614033964Categoria_farmacia.png" alt="" />
            <b>Farmapet</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/1613668386Categoria_higiene_2.png" alt="" />
            <b>Cuidado e higiene</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/1612554392Juguetes.png" alt="" />
            <b>Juguetes</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/categoria_accesorios+(1).png" alt="" />
            <b>Accesorios</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/1613595491Categoria_pet_owner.png" alt="" />
            <b>Para PetLovers</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </div>
      <!--Ofertas-->
      <div class="dropdown">
        <div>
          <b>Ofertas</b>
          <span>
            <i class="fas fa-chevron-down"></i>
          </span>
        </div>
        <div class="dropdown-content">
          <div>
            <img src="../assets/ICONS_COTEGORY_ALIMENTOS.png" alt="" />
            <b>Alimento</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/ICONS_COTEGORY_SNACKS.png" alt="" />
            <b>Snacks</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/1614033964Categoria_farmacia.png" alt="" />
            <b>Farmapet</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/1613668386Categoria_higiene_2.png" alt="" />
            <b>Cuidado e higiene</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/1612554392Juguetes.png" alt="" />
            <b>Juguetes</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/categoria_accesorios+(1).png" alt="" />
            <b>Accesorios</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/1613595491Categoria_pet_owner.png" alt="" />
            <b>Para PetLovers</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </div>
      <!--Ofertas-->
      <div class="dropdown">
        <div>
          <b>Servicios</b>
          <span>
            <i class="fas fa-chevron-down"></i>
          </span>
        </div>
        <div class="dropdown-content">
          <div>
            <img src="../assets/1613668386Categoria_higiene_2.png" alt="" />
            <b>Baño express</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
          <div>
            <img src="../assets/1614033964Categoria_farmacia.png" alt="" />
            <b>Veterinario en casa</b>
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </div>
      <!--Ofertas-->
      <div class="dropdown">
        <div>
          <b>Blog</b>
        </div>
      </div>
      <!--Laika member-->
      <div class="member">
        <img src="../assets/LaikaMemberNew.png" alt="" />
      </div>
    </div>
    <!--movile menu-->
    <div class="elements-movile d-block d-md-none">
      <div class="d-flex elements">
        <div class="movile-buttons" id="dog" v-on:click="clickPet('dog')">
          <b class="movile-text" id="text-dog">Perro</b>
          <img src="../assets/dog_menu.png" alt="" />
        </div>
        <div class="movile-buttons" id="cat" v-on:click="clickPet('cat')">
          <b class="movile-text" id="text-cat">Gato</b>
          <img src="../assets/cat_menu.png" alt="" />
        </div>
      </div>
      <div class="member mx-auto mt-2">
        <img src="../assets/LaikaMemberNew.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    clickPet(pet) {
      let buttons = document.getElementsByClassName("movile-buttons");
      let text = document.getElementsByClassName("movile-text");
      for (let i = 0; i < buttons.length; i++) {
        buttons.item(i).style.backgroundColor = "#ffffff";
        text.item(i).style.color = "#5b4181";
      }
      document.getElementById(pet).style.backgroundColor = "#5b4181";
      document.getElementById("text-" + pet).style.color = "#ffffff";
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
  .principal {
    height: 16vh !important;
    .logo {
      margin: auto;
    }
    .city {
      position: absolute;
      right: 50px;
      height: 75px;
    }
  }
}

@media (min-width: 768px) {
  .menu {
    border-bottom: 1px solid lightgray;
  }
}

.principal {
  background-color: #5b4181;
  height: 10vh;
  width: 100%;
  margin: inherit;
  .sub-principal {
    width: 90%;
    span {
      color: white;
    }
    img {
      margin: auto;
      height: 50px;
      cursor: pointer;
    }
    .search-bar {
      position: relative;
      span {
        color: #5b4181;
        position: absolute;
        right: 5px;
      }
      input {
        margin: auto;
        cursor: text;
      }
    }
    .menu-icon {
      span {
        font-size: 25px;
        cursor: pointer;
      }
    }
    .city {
      margin-left: 50px;
      cursor: pointer;
      div {
        img {
          width: 40px;
          height: auto;
          border-radius: 3px;
          margin: none;
        }
        b {
          color: white;
          margin: 10px;
        }
      }
    }
    .account {
      cursor: pointer;
      span {
        background-color: #6c548e;
        border-radius: 100%;
        font-size: 25px;
        height: 42px;
        width: 42px;
        text-align: center;
      }
      b {
        color: white;
        margin-bottom: 0px;
        margin-left: 5px;
      }
    }
    .cart {
      cursor: pointer;
      span {
        font-size: 25px;
        position: relative;
        div {
          position: absolute;
          right: -10px;
          background-color: #ed6632;
          top: -10px;
          border-radius: 100%;
          width: 20px;
          height: 20px;
          p {
            margin: auto;
            font-size: 14px;
            width: fit-content;
          }
        }
      }
    }
  }
}

.vertical-center {
  align-items: center;
  display: flex;
}

//Estilos para el menu del header
.menu {
  .elements {
    position: relative;
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    .dropdown {
      position: relative;
      display: inline-block;
      margin: 20px;
      b {
        margin: 5px;
      }
      span {
        color: #5b4181;
      }
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 200px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      padding: 12px 16px;
      z-index: 1;
      div {
        display: flex;
        align-items: center;
        position: relative;
        margin: 5px;
        img {
          width: 30px;
          height: auto;
        }
        span {
          position: absolute;
          right: 0px;
        }
      }
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .member {
      position: absolute;
      right: 0px;
    }
  }

  //Movile elements
  .elements-movile {
    .elements {
      margin: auto;
      width: fit-content;
      .movile-buttons {
        cursor: pointer;
        border-radius: 10px;
        border: 2px solid lightgray;
        padding: 11px;
        margin: 5px;
        b {
          color: #5b4181;
          margin-right: 10px;
        }
      }
    }
    .member {
      width: fit-content;
    }
  }
}
</style>