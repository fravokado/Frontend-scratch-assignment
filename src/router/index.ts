import Vue from "vue";
import VueRouter, { RouteConfig, RawLocation } from "vue-router";
import Challenge1 from "../views/Challenge1.vue";
import Challenge2 from "../views/Challenge2.vue";
import Challenge3 from "../views/Challenge3.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/challenge-1"
  },
  {
    path: "/challenge-1",
    name: "Challenge1",
    component: Challenge1
  },
  {
    path: "/challenge-2",
    name: "Challenge2",
    component: Challenge2
  },
  {
    path: "/challenge-3",
    name: "Challenge3",
    component: Challenge3
  }
];

const router = new VueRouter({
  routes
});

export default router;
