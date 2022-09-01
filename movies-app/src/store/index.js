import Vue from "vue";
import Vuex from "vuex";
import movies from "@/modules/movies";
import loader from "@/modules/loader";
import notify from "@/modules/notification";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { movies, loader, notify },
});
