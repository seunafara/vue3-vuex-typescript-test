<template>
  <div class="flex justify-between flex-wrap ">
    <!--Single Product-->
    <div
      v-for="product in products"
      :key="product.id"
      class="px-5 py-3 flex flex-col bg-white shadow-sm w-full lg:w-[48%] mb-4"
    >
      <img class=" w-72 self-center " :src="product.image" alt="" />
      <h4 class="mt-2 font-montserrat text-lg font-bold text-gray-700">
        {{ product.name }}
      </h4>
      <p class="font-roboto text-sm text-gray-500 font-normal">
        {{ product.description }}
      </p>
      <div class="mt-4 flex w-full justify-between items-center">
        <p class="font-roboto text-base font-extrabold text-gray-900">
          ${{ product.price }}
        </p>
        <button
          @click="addToCart(product)"
          class="btn bg-gray-700 text-sm text-white"
        >
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Product from "@/types/Product";
import { defineComponent, PropType, toRef } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    products: {
      required: true,
      type: Array as PropType<Product[]>,
    },
  },
  setup() {
    const store = useStore();
    const addToCart = (product: Record<string, any>) => {
      // commit product or run action - do action

      store.dispatch("addProduct", product);
    };

    return { addToCart };
  },
});
</script>

<style scoped></style>
