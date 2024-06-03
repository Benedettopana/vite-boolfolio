<script>
import { store } from "../data/store";
import Paginator from "./partials/Paginator.vue";
import ProjectCard from "./partials/ProjectCard.vue";

export default {
  components: {
    ProjectCard,
    Paginator,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <!-- <div class="container-xl mb-2"></div> -->

  <router-view></router-view>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;
</style>
