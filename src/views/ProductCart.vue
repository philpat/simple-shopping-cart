<template>
  <Nav />
  <div class="cart-container">
    <h1>Shopping Cart</h1>
    <div class="no-cart-item" v-if="getCartItems.length === 0">
      <h2>Ooops! Shopping Cart is empty</h2>
    </div>
    <form action="" v-else>
      <div class="cart" >
      <div class="cart-item" v-for="item in getCartItems" :key="item.id">
        <img :src="item.img" alt="" />
        <h3>{{ item.name }}</h3>
        <div class="button-cart">
          <button @click="increaseQuantity(item)">+</button>
          <button>{{ item.quantity }}</button>
          <button @click="decreaseQuantity(item)">-</button>
        </div>
        <p>Total cost: {{ item.price * item.quantity}}</p>
      </div>
      <h2>Cart Total: {{ calculateOverallTotal }}</h2>
      <div class="cta">
        <input type="text" placeholder="Enter email to checkout" v-model="email" required/>
        <button class="checkout" type="button"  @click="makePayment()">Checkout</button>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { Nav },
  data(){
    return{
      email: "",
      public_api_key: "pk_test_69ae1e92eeda66ebadc0a64046ec95f056598b70",
      noemail: false
    }
  },
  computed: {
    ...mapGetters(["getCartItems"]),
    calculateOverallTotal() {
      return this.getCartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    
  },
  methods:{
  //   increaseQuantity(item) {
  //   this.$store.commit('increaseQuantity', item);
  // }
  ...mapActions(["increaseItemQuantity", "loadCart"]),
    increaseQuantity(item) {
      this.increaseItemQuantity(item);
    },
  ...mapActions(["decreaseItemQuantity", "loadCart"]),
    decreaseQuantity(item) {
      this.decreaseItemQuantity(item);
    },
    calcTotal(){

    },
    makePayment() {
  if (this.noemail) {
    // alert("Please enter your email address.");
    return;
  }

  const amount = this.calculateOverallTotal * 100; // Paystack requires the amount in kobo (multiply by 100)

  const handler = PaystackPop.setup({
    key: this.public_api_key,
    email: this.email,
    amount: amount,
    currency: "NGN", // Adjust the currency code according to your needs
    callback: (response) => {
      // Payment was successful, handle the response
      console.log(response);
    },
    onClose: () => {
      // Payment was canceled or closed
      console.log("Payment closed");
    }
  });

  handler.openIframe(); // Open the Paystack payment iframe
}


  },
  mounted() {
    this.loadCart(); // Load cart items from localStorage when the component is mounted
  },
};
</script>


<style scoped>
h1 {
  font-weight: 100;
  text-align: center;
}
.cart-container {
  margin: 50px 0;
}
.no-cart-item {
  background-color: #fff;
  margin: 50px;
  text-align: center;
  border-radius: 5px;
  padding: 50px;
  font-weight: lighter;
  color: grey;
  font-size: 14px;
}
.cart {
  background-color: #fff;
  border-radius: 5px;
  margin: 0px 100px;
  padding: 20px;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e8f7f0;
  padding: 20px;
  border-radius: 5px;
  margin: 10px 0;
}
img {
  width: 20%;
}

button {
  margin: 10px;
  padding: 10px 15px;
}
.cta {
  text-align: center;
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
input {
  padding: 12px;
  outline: none;
  border-radius: 5px;
  border: 1px solid black;
  width: 50%;
  text-align: center;
  font-size: 16px
}
.checkout {
  border-radius: 5px;
  background-color: rgb(16, 150, 121);
  color: #fff;
  outline: none;
  border: none;
  padding: 12px;
  width: 50%;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}
</style>