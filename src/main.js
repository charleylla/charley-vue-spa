import Vue from "vue";
import VueRouter from "vue-router";
import router from "@/router";
import iView from "iview";
import App from "./App";

Vue.use(iView);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router,
}).$mount("#app");
