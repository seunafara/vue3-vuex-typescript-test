<template>
  <div class="flex justify-between flex-wrap mt-4">
    <!--Single Product-->
    <div
      v-for="(product, i) in products"
      :key="i"
      class="px-5 py-3 flex flex-col bg-white shadow-sm w-full lg:w-[45%] mr-2 mb-4"
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
        <button class="btn bg-gray-700 text-sm text-white">
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Product from "@/types/Product";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    products: {
      required: true,
      type: Array as PropType<Product[]>,
    },
  },
  // setup() {
  // },
});
</script>

<style scoped></style>
