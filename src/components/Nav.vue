<template>
  <div class="nav">
    <div class="container">
      <div>
        <button class="btn" @click="homeBtn()">Home</button>
      </div>
      <router-link :to="{name: 'productCart'}">
        <i class="fa-solid fa-cart-shopping fa-2x"></i>
        <span class="cart-length">{{ cartLength }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Nav",
  data(){
    return{
      // cartItem : this.$store.state.cart
    }
  },
  computed: {
    ...mapGetters(["getCartItems"]),
    // cartLength() {
    //   return this.getCartItems.reduce((total, item) => {
    //     return total + item.quantity;
    //   }, 0);
    // },
    cartLength() {
  return this.getCartItems.length;
}

  },

  methods:{
    homeBtn(){
      this.$router.push({name: "home"})
    }
  }
}
</script>

<style>
.chk{
  background-color: blue;
}
  .nav {
  background-color: white;
  padding: 15px 5px;
  box-shadow: 0px 5px 2px 0 #fff;
  position: relative
}
.container {
  margin: auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
}
.btn {
  background-color: rgb(16, 150, 121);
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
i{
  color: black;
}
.cart-length {
  position: absolute;
  top: 0px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: red;
  color: white;
  font-size: 12px;
  border-radius: 50%;
}
</style>