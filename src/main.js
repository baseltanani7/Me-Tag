import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "./assets/app.scss";
import JQuery from "jquery";
import "swiper";
import Vuelidate from "vuelidate";
//import axois from "axios";
import axios from "axios";

window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// import i18n from "./i18n";

// const lang = localStorage.getItem("lang") || "en";
//axois.defaults.baseURL = "http://localhost:5000/";
// axois.defaults.headers["Accept-Language"] = lang;

global.jQuery = JQuery;
Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  // i18n,
  render: (h) => h(App),
}).$mount("#app");
