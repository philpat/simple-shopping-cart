import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

// Vue.config.productionTip = false;
// Vue.use(store);

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app");
