import { createStore } from 'vuex';

const store = createStore({
  state: {
    comments: [],
    user: {},
  },
  mutations: {
    SET_LAST_COMMENTS(state, comments) {
      state.comments = comments;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    ADD_COMMENT(state, comment) {
      state.comments.push(comment);
    },
  },
  getters: {
    commentsSorted(state) {
      return state.comments.sort((a, b) => {
        a.id > b.id ? -1 : 1;
      });
    },
  },
});

export default store;
