import Vue from "vue";
import VueRouter from "vue-router";
import Inde from "../views/inde/Inde.vue";
import Classify from "../views/classify/Classify.vue";
import Shopping from "../views/shopping/Shopping.vue";
import Mine from "../views/mine/Mine.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inde",
    component: Inde
  },
  {
    path: "/inde",
    component: Inde
  },
  {
    path: "/classify",
    component: Classify
  },
  {
    path: "/shopping",
    component: Shopping
  },
  {
    path: "/mine",
    component: Mine
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
