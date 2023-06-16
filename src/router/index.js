import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Cart from '../views/Cart.vue'
import ProductCart from '../views/ProductCart.vue'
import TodosList from '../views/TodosList.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:productId',
    name: 'product-detail',
    component: ProductDetail
  },
  {
    path: '/product-cart',
    name: 'productCart',
    component: ProductCart
  },
  
  {
    path: '/todo-list',
    name: 'todosList',
    component: TodosList
  },
  
  {
    path: '/cart',
    name: 'cart',
    component: Cart
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
