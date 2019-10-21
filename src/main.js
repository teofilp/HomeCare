import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import jquery from 'jquery';

// window.$ = jquery;
// window.jquery = jquery;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
