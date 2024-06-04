<script>
import { store } from "../data/store";
import axios from "axios";

export default {
  name: "ProjectDetail",
  data() {
    return {
      store,
      axios,

      project: {},
    };
  },

  methods: {
    getApi() {
      const slug = this.$route.params.slug;

      axios
        .get(store.apiUrl + "project-by-slug/" + slug)
        .then((result) => {
          this.project = result.data.project;
          console.log(this.project);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },

  mounted() {
    this.getApi();
  },
};
</script>
<template>
  <div class="container-xl">
    <h1 class="text-center my-5">
      {{ project.title }}
    </h1>
    <p class="text-center my-3">
      {{ project.desc }}
    </p>
    <p class="my-2 py-3">
      <a :href="project.link" class="text-center">Link</a>
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
