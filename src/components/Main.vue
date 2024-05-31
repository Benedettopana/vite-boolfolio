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
  <h1 class="my-3 text-center">I miei progetti</h1>
  <div class="container-xl mb-2">
    <div class="row row-cols-3">
      <ProjectCard
        v-for="project in store.projects"
        :key="project.id"
        :title="project.title"
        :link="project.link"
        :desc="project.desc"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;
</style>
