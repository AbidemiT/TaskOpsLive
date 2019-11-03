import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/scss/main.scss";
import Axios from "axios";
import Swal from "sweetalert2";

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
  render: h => h(App)
}).$mount("#app");
