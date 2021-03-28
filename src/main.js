import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
let domainname = 'http://l8.test';
window.domainname = domainname;
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import AppStorage from './AppStorage';
window.AppStorage = AppStorage;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
