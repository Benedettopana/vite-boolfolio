<script>
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    nextPage(isNext) {
      isNext ? store.queryParam.page++ : store.queryParam.page--;
      console.log(store.queryParam);
      this.$emit("nextPage");
    },
  },
};
</script>
<template>
  <div class="text-center">
    <button
      @click="nextPage(false)"
      v-if="store.queryParam.page > 1"
      class="btn btn-warning mx-1"
    >
      -
    </button>

    Pagina {{ store.queryParam.page }} di {{ store.pageInfo.pages }}

    <button
      @click="nextPage(true)"
      v-if="store.queryParam.page < store.pageInfo.pages"
      class="btn btn-warning mx-1"
    >
      >
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
