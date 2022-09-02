import mutations from "../store/mutations";

const { NOTIFY } = mutations;

const notify = {
  state: {
    messages: [],
  },
  getters: {
    loadMesseges: ({ messages }) => messages[messages.length - 1],
  },
  mutations: {
    [NOTIFY](state, payload) {
      state.messages.push(payload);
    },
  },
  actions: {
    showMesseges(context, msg) {
      context.commit(NOTIFY, msg);
    },
  },
};

export default notify;
