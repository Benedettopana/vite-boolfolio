<script></script>

<template>
  <header class="fixed-top">
    <div class="container-fluid head">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item mx-3">
              <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link :to="{ name: 'projects' }">Progetti</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link :to="{ name: 'about' }">Chi Siamo</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link :to="{ name: 'contacts' }">Contattaci</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;

.head {
  // width: 100 !important;
  margin: 0 !important;
}
</style>
