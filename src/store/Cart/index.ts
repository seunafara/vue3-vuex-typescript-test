import { Module } from "vuex";
import { RootState } from "../types";
import { CartState } from "./types";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";
const state: CartState = {
  products: JSON.parse(localStorage.getItem("products") || "[]"),
  total: JSON.parse(localStorage.getItem("total") || "0"),
};

export const cart: Module<CartState, RootState> = {
  state,
  actions,
  mutations,
  getters,
};
