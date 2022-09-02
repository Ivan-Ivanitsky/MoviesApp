import mutations from "../store/mutations";

const { LOADER } = mutations;

const loader = {
  state: {
    spinner: true,
  },
  getters: {
    Loaded: ({ spinner }) => spinner,
  },
  mutations: {
    [LOADER](state, paylode) {
      state.spinner = paylode;
    },
  },
  actions: {
    togglLoader(context, value) {
      context.commit("LOADER", value);
    },
  },
};

export default loader;
