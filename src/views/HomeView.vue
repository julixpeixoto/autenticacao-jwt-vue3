<template>
  <main class="form-signin w-100 m-auto d-flex justify-content-center">
    <form class="w-25 p-3" @submit.prevent="onSubmit()">
      <h1 class="h3 mb-3 fw-normal">Login</h1>
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          v-model="email"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Entrar
      </button>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { signIn } from "../auth";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      await signIn(this.email, this.password);
      this.$router.push("/user");
    },
  },
});
</script>
