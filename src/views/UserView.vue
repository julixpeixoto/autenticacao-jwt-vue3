<template>
  <div class="about">
    <h1>Usuários</h1>
    <p v-for="(user, index) in users" :key="index">{{ user.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import request from '../request';

export default defineComponent({
  name: "UserList",
  data() {
    return {
      users: null 
    }
  },
  methods: {
    async getUsers() {
        const users = await request('GET', '/users', null);
        this.users = users;
    },
  },
  created() {
    this.getUsers()
  }
});
</script>
