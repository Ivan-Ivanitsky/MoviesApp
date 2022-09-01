<template>
  <div id="app">
    <header-app @onSearch="search" />
    <notification />
    <loader-app v-if="Loaded" />
    <movies-bg />
    <movies-list :list="moviesList" />
    <pagination-movies
      v-if="listPagination"
      :currentPage="currentPage"
      :moviesPerPages="moviesPerPages"
      :moviesLimit="moviesLimit"
      @onChangePage="onChangePage"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "@/components/MoviesList";
import MoviesBg from "@/components/MoviesBg.vue";
// import MainApp from "@/components/MainApp";
import PaginationMovies from "@/components/PaginationMovies";
import LoaderApp from "./components/LoaderApp.vue";
import HeaderApp from "@/components/HeaderApp";
import Notification from "@/components/Notification";
export default {
  components: {
    MoviesList,
    MoviesBg,
    PaginationMovies,
    LoaderApp,
    HeaderApp,
    Notification,
  },
  mounted() {
    this.changeCurrentPage(Number(this.$route.query.page) || 1);
    this.moviesFetch();
  },
  computed: {
    ...mapGetters([
      "moviesList",
      "moviesPerPages",
      "currentPage",
      "moviesLimit",
      "Loaded",
      "listPagination",
    ]),
    // getMovies() {
    //   return this.$store.getters.moviesList;
    // },
  },
  methods: {
    ...mapActions(["moviesFetch", "changeCurrentPage", "searchMovie"]),
    onChangePage(page) {
      this.$router.push({ query: { page } }).catch(() => {});
      this.changeCurrentPage(page);
      this.moviesFetch();
    },
    search(input) {
      this.searchMovie(input);
      if (input) {
        this.$router.push({ query: { input } }).catch(() => {});
      } else {
        this.moviesFetch();
      }
    },
  },
};
</script>

<style>
#app {
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  min-height: 100vh;
}
</style>
