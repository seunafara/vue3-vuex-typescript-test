import { reactive } from "vue";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { CartMutations } from "./mutations";
import { CartState } from "./types";

export const actions: ActionTree<CartState, RootState> = {
  addProduct({ commit, getters }, prod): void {
    let products: any[] = getters.getProducts;
    let total = getters.getTotal;

    // store unique products and increase count -- TODO
    // prod["count"]++;

    products = Array.from(new Set([...products, prod]));

    // recalculate total
    total = total + prod.price;
    localStorage.setItem("total", JSON.stringify(total));

    localStorage.setItem("products", JSON.stringify(products));

    commit(CartMutations.SET_PRODUCT, products);
    commit(CartMutations.SET_TOTAL, total);
  },
};
