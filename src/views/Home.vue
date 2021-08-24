<template>
  <div class=" bg-[#F9F9F9] min-h-screen pb-4">
    <ProductsHeading class="pad" />
    <div class="flex justify-between">
      <ProductsList :products="products" class="pad lg:w-[66%]" />
      <Cart class="w-[40%] lg:mr-2" />
    </div>
  </div>
</template>

<script lang="ts">
import ProductsHeading from "@/components/ProductsHeading.vue";
import ProductsList from "@/components/ProductsList.vue";
import { defineComponent, ref } from "vue";
// @ is an alias to /src
import Products from "@/assets/data/products";
import Product from "../types/Product";
import Cart from "@/components/Cart.vue";

export default defineComponent({
  name: "Home",
  components: { ProductsHeading, ProductsList, Cart },
  setup() {
    const products = ref<Product[]>(Products.products);

    return { products };
  },
});
</script>
