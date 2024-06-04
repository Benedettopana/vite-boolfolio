import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Contacts from "./pages/Contacts.vue";
import About from "./pages/About.vue";
import Error from "./pages/Error.vue";
import Projects from "./pages/Projects.vue";
import ProjectDetail from "./pages/ProjectDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/chi-siamo",
      name: "about",
      component: About,
    },
    {
      path: "/progetti",
      name: "projects",
      component: Projects,
    },
    {
      path: "/contatti",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/dettaglio-progetto/:slug",
      name: "projectDetail",
      component: ProjectDetail,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: Error,
    },
  ],
});

export { router };
