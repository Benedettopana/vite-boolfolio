<script>
import Main from "./components/Main.vue";
import Header from "./components/Header.vue";
// import Paginator from "./components/partials/Paginator.vue";

export default {
  components: {
    Main,
    Header,
    // Paginator,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <Header />

  <Main />
  <!-- <Paginator @nextPage="getApi" /> -->
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
