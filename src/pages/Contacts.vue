<script>
import axios from "axios";
import { store } from "../data/store";
export default {
  name: "Contacts",

  data() {
    return {
      name: [],
      email: [],
      message: [],
    };
  },

  methods: {
    sendEmail() {
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      axios
        .post(store.apiUrl + "send-email", data)
        .then((result) => {
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err.message);
        });

      console.log(data);
    },
  },
};
</script>
<template>
  <div class="container-xl">
    <h1 class="mb-5">Contattaci!</h1>
    <p class="my-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
      voluptatibus cupiditate a nobis repudiandae ad nulla commodi dolorem odit
      sequi magni, itaque harum ut optio dolorum doloribus voluptate quasi
      voluptas?
    </p>
    <ul>
      <li class="mb-2">Tel: 17 230 98 35</li>
      <li class="mb-2">Email: cektaw@lofmuhdap.ni</li>
      <li class="mb-2">Qatar Street: Al Kuwari Bldg, Al Sadd St</li>
    </ul>

    <div class="">
      <form @submit.prevent="sendEmail">
        <div class="row row-cols-2">
          <!--? Nome -->
          <div class="mb-3 col">
            <label for="name" class="form-label">Nome</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              v-model="name"
            />
            <p class="error"></p>
          </div>

          <!--? Email -->
          <div class="mb-3 col">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              name="email"
              aria-describedby="emailHelp"
            />
            <p class="error"></p>
          </div>

          <!--? Testo -->
          <div class="form-floating col-12">
            <!-- <label class="my-3" for="message">Messaggio</label> -->
            <textarea
              class="form-control"
              placeholder="Lascia il tuo messaggio qui"
              id="message"
              style="height: 100px"
              v-model="message"
              name="message"
            ></textarea>
            <p class="error"></p>
          </div>
          <!-- <div class="mb-3 col-12 w-100">
            <label for="message" class="form-label">Messaggio</label>
            <textarea id="message" v-model="message" name="message" />
            <p class="error"></p>
          </div> -->
        </div>
        <div class="">
          <button class="btn-primary" type="submit">Invia</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
li {
  list-style: none;
}
</style>
