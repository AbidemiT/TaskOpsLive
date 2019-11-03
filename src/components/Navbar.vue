<template>
  <div class="navbar">
    <div class="logo">
      <router-link exact to="/">TaskOps</router-link>
    </div>
    <ul class="menu" v-if="isLoggedIn">
      <li>
        <a @click="toggleVisibility">{{user  || 'Progress'}}</a>
        <AccDropDown @dropDownStatus="goto" v-show="dropDownVisibility === 'visible'" />
      </li>
      <li>
        <router-link to="/tasks">Tasks</router-link>
      </li>
    </ul>
    <ul class="menu" v-else>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link class="cta-outline" to="/register">Get Started</router-link>
      </li>
    </ul>
    <div :class="tog" @click="toggle()">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import AccDropDown from "@/components/AccDropDown";
import {mapGetters} from 'vuex';

export default {
  name: "Navbar",
  components: {
    AccDropDown
  },
  data() {
    return {
      sm: "sm-menu",
      dropDownVisibility: "hidden",
      cancel: "cancel",
      tog: "sm-menu",
    };
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
    toggle() {
      if (this.tog === "sm-menu") {
        this.tog = this.cancel;

        this.$emit("sidebarStatus", this.tog);
      } else {
        this.tog = this.sm;
        this.$emit("sidebarStatus", this.tog);
      }
    },
    toggleVisibility() {
      return this.dropDownVisibility === "hidden"
        ? (this.dropDownVisibility = "visible")
        : (this.dropDownVisibility = "hidden");
    },
    goto(value) {
      this.dropDownVisibility = value;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
}
</style>
