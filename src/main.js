import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { BFormGroup, AlertPlugin, BAlert } from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(AlertPlugin);
Vue.use(BootstrapVue);
Vue.component("b-alert", BAlert);

new Vue({
  render: h => h(App)
}).$mount("#app");

Vue.component("b-form-group", BFormGroup);
