import Vue from "vue";
import App from "./App.vue";

Vue.filter("to-lower", (value) => {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    console.log("global");
  },
});

new Vue({
  el: "#app",
  render: (h) => h(App),
});
