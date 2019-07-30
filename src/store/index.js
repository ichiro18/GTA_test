import Vue from "vue";
import Vuex from "vuex";
// Modules
import StateModule from "./modules/state";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: false,
  modules: {
    state: StateModule
  }
});
