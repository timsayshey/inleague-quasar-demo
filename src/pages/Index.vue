<template>
  <q-page class="flex flex-center">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="username"
        label="Your email *"
        hint="Your Email or Username"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type your email or username']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Your password *"
        lazy-rules
        :rules="[
          val => (val !== null && val !== '') || 'Please type your password'
        ]"
      />

      <div>
        <q-btn label="Login" type="submit" color="primary" />
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'Login',
  methods: {
    ...mapActions('user', {
      authenticate: 'authenticate'
    }),
    async onSubmit() {
      let success = await this.authenticate({
        username: this.username,
        password: this.password
      });
      if (success) this.$router.push({ path: '/user' });
    }
  },
  data() {
    return {
      username: 'jobs@inleague.com',
      password: 'openBook99'
    };
  }
});
</script>
