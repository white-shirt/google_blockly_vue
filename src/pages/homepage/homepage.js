import Vue from "vue";
import homepage from "./homepage.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  template: "<homepage/>",
  components: { homepage }
})
