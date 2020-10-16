import Vue from "vue";
import VueRouter from "vue-router";
import Inde from "../views/inde/Inde.vue";
import Classify from "../views/classify/Classify.vue";
import Shopping from "../views/shopping/Shopping.vue";
import Mine from "../views/mine/Mine.vue";

import Particulars from "../components/particulars/Particulars.vue";

import Mineds from "../views/mine/minediz/minediz.vue";
import sioeps from "../views/mine/minediz/sioeps.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inde",
    component: Inde,
    meta: {
      isshow: true
    }
  },
  {
    path: "/inde",
    component: Inde,
    meta: {
      isshow: true
    }
  },
  {
    path: "/classify",
    component: Classify,
    meta: {
      isshow: true
    }
  },
  {
    path: "/shopping",
    component: Shopping,
    meta: {
      isshow: true
    }
  },
  {
    path: "/mine",
    component: Mine,
    meta: {
      isshow: true
    }
  },
  {
    path: "/particulars",
    component: Particulars
  },
  {
    path: "/Mineds",
    component: Mineds
  },
  {
    path: "/sioeps",
    component: sioeps
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
