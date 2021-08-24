import { GetterTree } from "vuex";
import { RootState } from "./types";

export const getters: GetterTree<RootState, RootState> = {
  app_name(state): string {
    return state.app_name;
  },
};
