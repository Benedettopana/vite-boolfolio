<script>
import axios from "axios";
import { store } from "./data/store";
import Main from "./components/Main.vue";

export default {
  components: {
    Main,
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
          console.log(store.projects);
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
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
