<template>
  <Nav />

  <div class="description">
    <div class="description-item">
      <div class="item">
        <img :src="destination.img" alt="" srcset="" />
      </div>
      
      <div class="item-description">
        <h2>{{ destination.name }}</h2>
        <p class="category">Category: mountain bike</p>
        <p> {{ destination.description }}</p>
        <h3 class="price">Price: {{ destination.price }}</h3>
       
          <button class="product-btn" @click="addItemToCart(destination)">Add to Cart</button>
          
       
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Nav from "../components/Nav.vue";
export default {
  components: { Nav },

  data() {
    return {
      allItems: this.$store.state.items,
      itemId: this.$route.params.productId,
      item: [],
    };
  },

  computed: {
    destination() {
      return this.allItems.find((item) => item.id === parseInt(this.itemId));
    },
  },
  methods:{
    // addItemToCart(item) {
    // this.$store.commit('addToCart', item);
    ...mapMutations(["addToCart"]),
    
    addItemToCart(item) {
      const existingItem = this.$store.getters.getCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // Item already in cart, do not add it again
        // return;
        existingItem.quantity++;
      }

      // this.addToCart(item);
      this.$store.commit('addToCart', item);
    },
  // }
  }
};
</script>

<style>
.description {
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

}
.description-item {
  margin: 40px ;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  
}
.item-description{
  margin: auto 40px;
    width: 100%;
}
.item-description h2, .price{
  color:rgb(16, 150, 121) ;
}
.price{
  margin: 20px 0;
}
.item-description p{
  margin-bottom: 1.25rem;
  line-height: 2.25rem;
  /* font-size: 18px; */
  color: grey;
  font-weight: lighter;
}
.category{
  margin-bottom: 1.25rem;
  font-size: .87rem;
}

.product-btn{
  width: 100%;
    font-weight: bolder;
    background-color: rgb(16, 150, 121);
    padding: 10px 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin: 30px 0;
  }
</style>