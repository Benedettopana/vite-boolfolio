<script>
import axios from "axios";
import { store } from "../data/store.js";
import ProjectCard from "../components/partials/ProjectCard.vue";
export default {
  name: "Projects",

  components: {
    ProjectCard,
  },
  data() {
    return {
      store,
      axios,
    };
  },

  methods: {
    getApi(apiUrl, type = "") {
      axios
        .get(apiUrl + type)
        .then((result) => {
          store.projects = result.data.data;
          // console.log(result);
        })
        .catch((error) => {
          error = error.message;
        });
    },
  },

  mounted() {
    this.getApi(store.apiUrl, "projects");
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
        :project="project"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
