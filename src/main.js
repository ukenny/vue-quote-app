import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BFormGroup } from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  render: h => h(App)
}).$mount("#app");

Vue.component("b-form-group", BFormGroup);
