<template>
  <div class="flex flex-col py-4">
    <div class="flex justify-start items-baseline">
      <h4 class="text-lg font-montserrat font-semibold text-gray-700">
        {{ app_name }}
      </h4>
      <p class="text-xs ml-4 font-roboto text-gray-500">6 items</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  //   setup() {},
  computed: {
    ...mapGetters(["app_name"]),
  },
});
</script>

<style scoped></style>
