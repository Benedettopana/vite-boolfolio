<script>
export default {
  props: {
    title: String,
    link: String,
    desc: String,
  },
};
</script>

<template>
  <div class="col my-2">
    <div class="card" style="width: 18rem; height: 25rem">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <!-- <h6 class="card-subtitle mb-2 text-body-secondary"></h6> -->
        <p class="card-text">
          {{ desc }}
        </p>
        <a :href="link" class="card-link">Link</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
