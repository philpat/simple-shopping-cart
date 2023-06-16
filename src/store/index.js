// import Vue from "vue";
// import Vuex from "vuex";
// load vuex
// Vue.use(Vuex);

// create store
import { createStore } from 'vuex'
export default createStore({
  state: {
    cart: [],

    items: [
      {
        id: 1,
        name: "Sonder Evol GX Eagle",
        // img: "src/assets/bikes.webp",
        img: require("@/assets/bikes.webp"),
        description: "Sonder’s Evol GX Eagle is designed and tested in the UK, and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s balanced the bike’s performance to suit everything from trail centres to enduro with its modern long, slack and low geometry. Sonder sells most of its bikes direct, so prices are reasonable and the six builds available are all well-specced.",
        price: 10,
        quantity: 5
      },
      {
        id: 2,
        name: "Merida eONE-SIXTY 10k",
        img: require("@/assets/bikes.webp"),
        description: "Sonder’s Evol GX Eagle is designed and tested in the UK, and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s balanced the bike’s performance to suit everything from trail centres to enduro with its modern long, slack and low geometry. Sonder sells most of its bikes direct, so prices are reasonable and the six builds available are all well-specced.",
        price: 90,
        quantity: 8
      },
      {
        id: 3,
        name: "Ribble's CX5 cyclocross all rounder",
        img: require("@/assets/bikes.webp"),
        description: "Sonder’s Evol GX Eagle is designed and tested in the UK, and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s balanced the bike’s performance to suit everything from trail centres to enduro with its modern long, slack and low geometry. Sonder sells most of its bikes direct, so prices are reasonable and the six builds available are all well-specced.",
        price: 50,
        quantity: 4
      },
      {
        id: 3,
        name: "Ribble's CX5 cyclocross all rounder",
        img: require("@/assets/bikes.webp"),
        description: "Sonder’s Evol GX Eagle is designed and tested in the UK, and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s balanced the bike’s performance to suit everything from trail centres to enduro with its modern long, slack and low geometry. Sonder sells most of its bikes direct, so prices are reasonable and the six builds available are all well-specced.",
        price: 50,
        quantity: 4
      },
      {
        id: 3,
        name: "Ribble's CX5 cyclocross all rounder",
        img: require("@/assets/bikes.webp"),
        description: "Sonder’s Evol GX Eagle is designed and tested in the UK, and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s balanced the bike’s performance to suit everything from trail centres to enduro with its modern long, slack and low geometry. Sonder sells most of its bikes direct, so prices are reasonable and the six builds available are all well-specced.",
        price: 50,
        quantity: 4
      },
      {
        id: 3,
        name: "Ribble's CX5 cyclocross all rounder",
        img: require("@/assets/bikes.webp"),
        description: "Sonder’s Evol GX Eagle is designed and tested in the UK, and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s balanced the bike’s performance to suit everything from trail centres to enduro with its modern long, slack and low geometry. Sonder sells most of its bikes direct, so prices are reasonable and the six builds available are all well-specced.",
        price: 50,
        quantity: 4
      },
    ]
  },

  getters: {
    getItems: (state) => {
      return state.items
    },

    getCartItems: (state) => {
      // return state.cart
      return state.cart.filter((cartItem) => cartItem.quantity > 0)
        .map((cartItem) => {
          const item = state.items.find((item) => item.id === cartItem.id);
          if (item) {
            return { ...item, quantity: cartItem.quantity };
          }
        });
    }
  },
  mutations: {
    // state.cart.push(item.id);


    //this is so we don't have duplicate entries of an item. 
    // the above would have made us have duplicate entries

    addToCart(state, item) {
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseQuantity(state, item) {
      const cartItem = state.cart.find((cartItem) => cartItem.id === item.id);
      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity++;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseQuantity(state, item) {
      const cartItem = state.cart.find((cartItem) => cartItem.id === item.id);
      if (cartItem !== -1) {
        cartItem.quantity--;
        if (state.cartItem.quantity < 1) {
          state.cart.splice(cartItem, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    loadCart(state) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
  },
  actions: {
    increaseItemQuantity({ commit }, item) {
      commit("increaseQuantity", item);
    },
    decreaseItemQuantity({ commit }, item) {
      commit("decreaseQuantity", item);
    },
    loadCart({ commit }) {
      commit("loadCart");
    },
  },
  modules: {
  }
});


// todos: [
//   {
//     title: "todo item a",
//     completed: false
//   },
//   {
//     title: "todo item b",
//     completed: false
//   }
// ],
// mutations: {
//   NEW_TODO(state, todoItem){
//     state.todos.push({title: todoItem,
//       completed: false
//     })
//   }
// },
// actions: {
//   addNewTodo({commit}, todoItem){
//     commit('NEW_TODO', todoItem)
//   }
// },





// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
