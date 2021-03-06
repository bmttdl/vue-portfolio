import Vue from 'vue';

import App from './App';
import router from './router';

import Resource from 'vue-resource';
import VueSweetalert from 'vue-sweetalert';

Vue.use(Resource);
Vue.use(VueSweetalert);

Vue.config.productionTip = false;

import SmoothScroll from 'smoothscroll-polyfill';
SmoothScroll.polyfill();

window.AOS = require('aos');
window.Waves = require('node-waves');

const Portfolio = new Vue({
	router ,
  template: '<App/>',
  components: { App }
}).$mount('#wrapper');
