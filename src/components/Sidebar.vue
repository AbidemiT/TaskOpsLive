<template>
  <div class="sidebar">
    <ul class="sidebar-menu" v-if="isLoggedIn">
      <li>
        <a @click="toggleVisibility">{{user}}</a>
        <AccDropDown @dropDownStatus="goto" v-show="dropDownVisibility === 'visible'" />
      </li>
      <li>
        <router-link to="/tasks">Tasks</router-link>
      </li>
    </ul>
    <ul class="sidebar-menu" v-else>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link class="cta-outline" to="/register">Get Started</router-link>
      </li>
    </ul>
    <!-- <ul class="sidebar-menu">
      <li>
        <a @click="toggleVisibility" >My Account</a>
        <AccDropDown @dropDownStatus="goto" v-show="dropDownVisibility === 'visible'" />
      </li>
      <li>
        <router-link to="/tasks">Tasks</router-link>
      </li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/register">Get Started</router-link></li>
    </ul> -->
  </div>
</template>

<script>
import AccDropDown from '@/components/AccDropDown';
import {mapGetters} from 'vuex';

export default {
  name: 'Sidebar',
  components: {
    AccDropDown
  },
  data() {
    return {
      status: '',
      dropDownVisibility: 'hidden',
      menus: [
        { route: '/user', name: 'My Account' },
        { route: '/login', name: 'Login' },
        { route: '/signup', name: 'Get Started' },
        { route: '/tasks', name: 'Tasks' }
      ]
    }
  },
    computed: {
    isLoggedIn(){
      return this.$store.getters.isLoggedIn;
    },
    ...mapGetters({
      user: 'profile'
    })
  },
  methods: {
    toggleVisibility() {
      return this.dropDownVisibility === 'hidden'
        ? (this.dropDownVisibility = 'visible')
        : (this.dropDownVisibility = 'hidden')
    },
    goto(value) {
      this.dropDownVisibility = value
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
