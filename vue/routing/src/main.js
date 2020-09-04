import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
  },
});

// run this code before every route loading operation thing
router.beforeEach((to, from, next) => {
  console.log("beforEach");
  next();
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
