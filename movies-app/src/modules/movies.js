import axios from "@/plugins/axios";
import moviesImdb from "@/plugins/mock/imdb_top250";
import mutations from "@/store/mutations";

function serializeMovies(responce) {
  return responce.reduce((acc, movie) => {
    acc[movie.imdbID] = movie;
    return acc;
  }, {});
}

const { MOVIES, PAGINATION_MOVIES, REMOVE, SEARCH } = mutations;

const movies = {
  state: {
    paginationItem: false,
    bgPoster: null,
    moviesTop: moviesImdb,
    currentPage: 1,
    moviesPerPages: 12,
    movies: {},
    searchMovie: "",
    error: null,
  },
  getters: {
    listPagination: ({ paginationItem }) => paginationItem,
    moviesList: ({ movies }) => movies,
    slicePage:
      ({ moviesTop }) =>
      (from, to) =>
        moviesTop.slice(from, to),
    currentPage: ({ currentPage }) => currentPage,
    moviesPerPages: ({ moviesPerPages }) => moviesPerPages,
    moviesLimit: ({ moviesTop }) =>
      Math.round(Object.keys(moviesTop).length / 12),
  },
  mutations: {
    [MOVIES](state, paylode) {
      state.movies = paylode;
      state.paginationItem = true;
      state.error = null;
    },
    [PAGINATION_MOVIES](state, paylode) {
      state.currentPage = paylode;
    },
    [REMOVE](state, paylode) {
      state.moviesTop = state.moviesTop.filter((el) => el != paylode.id);
    },
    [SEARCH](state, paylode) {
      state.searchMovie = paylode;
      state.error = null;
    },

    onChangePoster(state, paylode) {
      state.bgPoster = paylode;
    },
  },
  actions: {
    async moviesFetch({ getters, commit, state }) {
      try {
        this.dispatch("togglLoader", true);
        const { currentPage, moviesPerPages, slicePage } = getters;
        const from = currentPage * moviesPerPages - moviesPerPages;
        const to = currentPage * moviesPerPages;
        const moviesId = slicePage(from, to);
        const request = moviesId.map((id) =>
          axios.get("/", { params: { i: `${id}` } })
        );
        const responce = await Promise.all(request);
        const movies = serializeMovies(responce);
        commit(MOVIES, movies);
      } catch (err) {
        state.error = `${err.message} !`;
      } finally {
        this.dispatch("togglLoader", false);
      }
    },
    changePoster(context, bgMovies) {
      try {
        context.commit("onChangePoster", bgMovies);
      } catch (err) {
        return err;
      }
    },
    changeCurrentPage(context, page) {
      try {
        context.commit(PAGINATION_MOVIES, page);
      } catch (err) {
        return err;
      }
      // this.moviesFetch();
    },
    removeItemMovie(context, id) {
      context.commit(REMOVE, id);
    },
    async searchMovie(context, movie) {
      try {
        this.dispatch("togglLoader", true);
        const searchMovies = await axios.get(`/?s=${movie}`);
        if (!searchMovies.Search) {
          throw Error(searchMovies.Error);
        }
        const movies = serializeMovies(searchMovies.Search);
        context.commit(SEARCH, movies);
        context.commit(MOVIES, movies);
        this.dispatch("showMesseges", {
          msg: `Found a movie ${movie.toUpperCase()}`,
          title: `movie succses`,
          variant: "success",
        });
      } catch (err) {
        this.dispatch("showMesseges", {
          msg: err.message,
          title: "The movie was not found",
          variant: "danger",
        });
      } finally {
        this.dispatch("togglLoader", false);
      }
    },
  },
};

export default movies;
