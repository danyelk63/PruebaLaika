<template>
  <div class="principal">
    <div class="elements row">
      <div
        class="col-12 col-md-3"
        v-for="product in products"
        :key="product.id"
      >
        <div class="product">
          <div class="img-product">
            <img
              v-bind:src="require('../assets/' + product.imageName)"
              alt=""
              class="img-product mx-auto d-flex"
            />
          </div>
          <div class="name">
            <h5>
              <b>{{ product.name }}</b>
            </h5>
          </div>
          <div class="stars d-flex">
            <span v-for="aux in product.stars" :key="aux">
              <i class="fas fa-star"></i>
            </span>
          </div>
          <div class="price d-flex">
            <div class="total">
              <h5>
                <b>
                  $
                  {{ product.price - product.price * (product.discount / 100) }}
                </b>
              </h5>
            </div>
            <div class="original">
              <p>Antes</p>
              <p style="text-decoration: line-through">$ {{ product.price }}</p>
            </div>
          </div>
          <div class="member d-flex">
            <div class="price-member">
              <h5>
                <b>
                  $
                  {{ product.price - product.price * (product.discount / 100) }}
                </b>
              </h5>
            </div>
            <div class="laika-member">
              <img src="../assets/LaikaMemberNew.png" alt="" />
            </div>
          </div>
          <div class="size row" v-for="size in product.size" :key="size">
            <div class="item">
              <b>{{ size }}</b>
            </div>
          </div>
          <div class="cart">
            <span>
              <i class="fas fa-shopping-cart"></i>
            </span>
            <h5>Añadir al carrito</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Store",
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios.get("http://localhost:3000/").then((result) => {
      this.products = result.data;
      console.log(this.products);
    });
  },
};
</script>

<style lang="scss" scoped>
.principal {
  .elements {
    width: 100%;
    .product {
      padding: 30px;
      border: 1px solid lightgray;
      border-radius: 10px;
      background-color: #fafafa;
      margin: 20px;
      .img-product {
        img {
          width: 200px;
          height: auto;
        }
      }
      .name {
        height: 47px;
      }
      .stars {
        span {
          color: #f5b33d;
          font-size: 12px;
        }
      }
      .price {
        margin-bottom: 5px;
        .total {
          b {
            margin: none;
          }
        }
        .original {
          margin-left: 5px;
          p {
            margin: 0px;
            color: gray;
            font-size: 15px;
          }
        }
      }
      .member {
        .price-member {
          b {
            color: #b34428;
          }
        }
        .laika-member {
          margin-left: 5px;
          img {
            width: 150px;
            height: auto;
          }
        }
      }
      .size {
        .item {
          width: fit-content;
          border: 1px solid #5b4181;
          border-radius: 3px;
          padding: 5px 20px;
          b {
            color: #5b4181;
          }
        }
      }
      .cart {
        width: 100%;
        align-items: center;
        background-color: #5b4181;
        display: flex;
        padding: 14px;
        margin-top: 10px;
        span {
          color: white;
          margin: auto;
        }
        h5 {
          color: white;
          margin: auto;
        }
      }
    }
  }
}
</style>
