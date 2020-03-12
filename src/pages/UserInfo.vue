<template>
  <q-page>
    <div class="flex flex-center">
      <q-breadcrumbs gutter="sm">
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="User Details" />
      </q-breadcrumbs>
    </div>

    <h4 class="text-center">User Details</h4>

    <div class="flex flex-center">
      <q-list bordered padding>
        <q-item v-for="(val,key) in user.userData" v-bind:key="key">
          <q-item-section>
            <q-item-label overline>{{key}}</q-item-label>
            <q-item-label>{{val}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'UserInfo',
  computed: {
    ...mapState('user', {
      user: 'data'
    })
  }
});
</script>

<style lang="scss">
h4 {
  display: block;
}
</style>
