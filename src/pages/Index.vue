<template>
  <q-page class="flex flex-center">
    <q-form @submit="onSubmit" class="q-gutter-md">

      <q-input filled
        class="username"
        v-model.trim="username"
        label="Your email *"
        @input="$v.username.$touch()"
        :rules="[
          val => $v.username.required || 'Email is required',
          val => $v.username.email || 'Invalid email format',
        ]"
      />

      <q-input filled
        class="password"
        type="password"
        v-model.trim="password"
        label="Your password *"
        @input="$v.password.$touch()"
        :rules="[
          val => $v.password.required || 'Password is required',
          val => $v.password.letterNumber || 'Must have at least one letter and one number',
        ]"
      />

      <div>
        <q-btn class="submit" label="Login" type="submit" color="primary" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { required, email, helpers } from 'vuelidate/lib/validators'
const letterNumber = helpers.regex('letterNumber', /[a-z].*[0-9]|[0-9].*[a-z]/i)
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
  computed: {
    passwordInvalid() {
      return !$v.password.required || !$v.password.minLength
    }
  },
  data() {
    return {
      username: 'jobs@inleague.com',
      password: 'openBook99'
    };
  },
  validations: {
    username: {
      required,
      email,
    },
    password: {
      letterNumber,
      required,
    },
  }
});
</script>
