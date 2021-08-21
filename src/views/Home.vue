<template>
  <div class="pad bg-[#F9F9F9] min-h-screen">
    <ProductsHeading />
    <ProductsList :products="products" class="lg:w-[66%]" />
  </div>
</template>

<script lang="ts">
import ProductsHeading from "@/components/ProductsHeading.vue";
import ProductsList from "@/components/ProductsList.vue";
import { defineComponent, ref } from "vue";
// @ is an alias to /src
import Products from "@/assets/data/products";
import Product from "../types/Product";

export default defineComponent({
  name: "Home",
  components: { ProductsHeading, ProductsList },
  setup() {
    const products = ref<Product[]>(Products.products);

    return { products };
  },
});
</script>
