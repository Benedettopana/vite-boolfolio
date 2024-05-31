<script>
import axios from "axios";
import { store } from "./data/store";
import Main from "./components/Main.vue";
// import Paginator from "./components/partials/Paginator.vue";

export default {
  components: {
    Main,
    // Paginator,
  },
  data() {
    return {
      axios,
    };
  },

  methods: {
    getApi() {
      axios
        .get(store.apiUrl)
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
    this.getApi();
  },
};
</script>

<template>
  <Main />
  <!-- <Paginator @nextPage="getApi" /> -->
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
