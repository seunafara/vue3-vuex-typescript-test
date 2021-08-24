<template>
  <div
    class="flex flex-col rounded-md py-3 px-4 border-[0.5px] border-gray-200 bg-white max-h-screen overflow-scroll"
  >
    <h4 class="text-sm text-gray-700 font-roboto font-medium">Your Order</h4>

    <div class="flex flex-col mt-4">
      <!--Cart Product-->
      <div
        v-for="product in getProducts"
        :key="product.id"
        class="flex bg-gray-50 px-2 py-3 rounded-md mb-3"
      >
        <img class="w-32 rounded-md" :src="product.image" alt="" />
        <div class="flex flex-col ml-2 justify-between">
          <h4 class="text-gray-700 text-sm font-bold font-montserrat">
            {{ product.name }}
          </h4>
          <div class="flex">
            <p class="text-sm font-roboto text-gray-500">
              ${{ product.price }}
            </p>
            <!-- <p class="text-sm font-roboto font-bold text-gray-600 ml-1">
              * {{ product.count }}
            </p> -->
          </div>
        </div>
      </div>
      <!-- Total and Checkout btn -->
      <div class="flex flex-col mt-4 px-2">
        <div class="flex justify-between">
          <h4 class="text-lg text-black font-montserrat">Total</h4>
          <h4 class="text-lg text-black font-montserrat">${{ getTotal }}</h4>
        </div>
        <button class="btn mt-3 font-roboto !py-4 bg-black text-lg text-white">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters(["getProducts", "getTotal"]),
  },
  // setup() {
  // },
});
</script>

<style scoped></style>
