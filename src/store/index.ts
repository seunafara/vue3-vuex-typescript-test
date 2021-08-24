import { createStore } from "vuex";
import { RootState } from "./types";
import { getters } from "./getters";
import { cart } from "./Cart";

export default createStore<RootState>({
  state: {
    app_name: "FireGlasses 🔥",
  },
  getters,
  mutations: {},
  actions: {},
  modules: {
    cart,
  },
});
