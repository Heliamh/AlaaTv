import Vue from 'vue'
import App from './App.vue'

import ScrollFixedHeader from 'vuejs-scroll-fixed-header';
import ScrollLoader from 'vue-scroll-loader'


Vue.use(ScrollFixedHeader);
Vue.use(ScrollLoader);

new Vue({
  el: '#app',
  render: h => h(App) ,


})
