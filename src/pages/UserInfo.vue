<template>
  <q-page>

    <div class="flex flex-center">
      <q-breadcrumbs gutter="sm">
        <q-breadcrumbs-el label="Home" />
        <q-breadcrumbs-el label="User Details" />
      </q-breadcrumbs>
    </div>

    <!-- <div class="flex flex-center">
      <q-list bordered padding>
        <q-item v-for="(val,key) in user.userData" v-bind:key="key">
          <q-item-section>
            <q-item-label overline>{{key}}</q-item-label>
            <q-item-label>{{val}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div> -->

    <div class="flex items-center justify-center min-h-screen bg-grey-darker font-sans leading-normal">
      <div class="bg-white rounded max-w-xs w-full shadow-lg select-none cursor-default overflow-hidden">
        <div v-for="(val,key) in user.userData" v-bind:key="key" class="parent hover:bg-blue p-4 border-b" >
          <p class="font-semibold text-lg mb-1 text-black parent-hover:text-white">{{toWords(key)}}</p>
          <p class="text-grey-darker parent-hover:text-white">{{handle(val)}}</p>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import toWords from 'split-camelcase-to-words'
import { mapState } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'UserInfo',
  computed: {
    ...mapState('user', {
      user: 'data'
    })
  },
  methods: {
    toWords,
    handle(val) {
      if(val === 1) {
        return "Yes"
      } else if(val === 0) {
        return "No"
      } else {
        return val
      }
    }
  }
});
</script>

<style lang="scss">
h4 {
  display: block;
}
</style>
