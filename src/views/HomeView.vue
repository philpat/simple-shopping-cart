<template>
<Nav />
  
  <div class="main-heading">
    <h1>Latest Products</h1>
    <div class="container">
      <div class="item-container" >
      <div class="content-item" v-for="(item, id) in allItems" :key="id">
        <img :src="item.img" alt="" class="image" />
        <div class="text">
          <h3 >{{item.name}}</h3>
          <h5 class="price">{{item.price}}</h5>
          <div class="cart-btn">
           <!-- <router-link :to="`/product/${item.id}`" class="view-btn">View</router-link> -->
           <router-link :to="{ name: 'product-detail', params: { productId: item.id } }" class="view-btn">View</router-link>
           <!-- <router-link :to="{name: 'home'}" class="view-btn" @click="addToCart">Add to cart</router-link> -->
           <button  class="view-btn" @click="addItemToCart(item)">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue"
import { mapMutations } from "vuex";
export default {
  components: {Nav},
  data() {
    return {
      // allItems: this.$store.state.items,
      
    };
  },
  computed: {
    allItems() {
      return this.$store.getters.getItems;
    },
  },
  
  methods:{
    // addItemToCart(item) {
    // this.$store.commit('addToCart', item);

    ...mapMutations(["addToCart", "increaseQuantity"]),
    
    addItemToCart(item) {
      const existingItem = this.$store.getters.getCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // Item already in cart, increase its quantity if it's greater than 0
        if (existingItem.quantity > 0) {
          this.increaseQuantity(existingItem);
        }
      } else {
        // Item not in cart, add it
        this.addToCart(item);
      }
    }
  // }
  }
};
</script>
<style >
* {
  padding: 0;
  margin: 0;
}
.content-item {
  background-color: white;
  padding: 15px 5px;
  box-shadow: 0px 5px 2px 0 #fff;
  border-radius: 20px;
}


.main-heading {
  text-align: center;
}
.item-container {
   /* display: flex;
  gap: 30px;
  margin-top: 10px;
  flex-wrap: wrap;
  width: 100%;  */

  
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 30px;
  padding: 15px;

}
 
.image {
  width: 80%;
}
h1 {
  padding: 20px 0;
  color: rgb(16, 150, 121);
  font-weight: 800;
  font-size: x-larger;
}


.price {
  line-height: 10px;
  color: rgb(73, 72, 72);
  font-size: 18px;
}

@media(max-width:760px){
  .item-container{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}

</style>
