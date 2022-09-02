import Vue from "vue";
import VueRouter from "vue-router";
import PaginationMovies from "@/components/PaginationMovies";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "paginations",
    component: PaginationMovies,
  },
];
const router = new VueRouter({ routes });

export default router;
