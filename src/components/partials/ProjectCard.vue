<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="col my-2 justify-content-center d-flex">
    <div class="card" style="width: 18rem; height: 25rem">
      <div class="card-body">
        <h5 class="card-title">
          <router-link
            :to="{ name: 'projectDetail', params: { slug: project.slug } }"
            >{{ project.title }}</router-link
          >
        </h5>
        <!-- <h6 class="card-subtitle mb-2 text-body-secondary"></h6> -->
        <p class="card-text">
          {{ project.desc }}
        </p>
        <a :href="project.link" class="card-link">Link</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
