import { GetterTree } from "vuex";
import { RootState } from "../types";
import { CartState } from "./types";

export const getters: GetterTree<CartState, RootState> = {
  getProducts(state): [] {
    return state.products;
  },
  getTotal(state): number {
    return state.total;
  },
};
