import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import LyTab from "ly-tab";
import "./assets/js/rem.js";
import "./assets/css/reset.css";
import axios from "axios";
Vue.prototype.$http = axios;
Vue.use(Vant);
Vue.use(LyTab);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
