import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/scss/main.scss";
import "@/assets/css/tailwind.css";
import Axios from "axios";
import Swal from "sweetalert2";
import AOS from 'aos'
import 'aos/dist/aos.css'

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;

Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount("#app");
