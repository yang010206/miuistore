import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    obj: {}
  },
  mutations: {
    data(state, i) {
      state.obj = i;
    }
  },
  actions: {},
  modules: {}
});
