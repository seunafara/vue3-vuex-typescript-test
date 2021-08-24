import { MutationTree } from "vuex";
import { CartState } from "./types";

export enum CartMutations {
  SET_PRODUCT = "SET_PRODUCT",
  SET_TOTAL = "SET_TOTAL",
}

export const mutations: MutationTree<CartState> = {
  [CartMutations.SET_PRODUCT](state, payload: []) {
    state.products = payload;
  },
  [CartMutations.SET_TOTAL](state, payload: number) {
    state.total = payload;
  },
};
