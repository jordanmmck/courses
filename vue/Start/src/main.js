import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  methods: {
    normalize(id) {
      this.$emit("normalize", id);
    },
  },
});

new Vue({
  el: "#app",
  render: (h) => h(App),
});
