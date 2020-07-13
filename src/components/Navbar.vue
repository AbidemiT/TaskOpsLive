<template>
  <nav class="flex items-center justify-between flex-wrap bg-white py-4 px-6 md:p-6 shadow-md">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <router-link exact to="/" class="text-yellow">TaskOps</router-link>
    </div>
    <div class="flex-grow lg:flex lg:items-center lg:w-auto">
      <ul class="text-sm flex justify-end lg:flex-grow" v-if="isLoggedIn">
        <li>
          <a class="cursor-pointer" @click="toggleVisibility">{{user || 'Progress'}}</a>
          <AccDropDown @dropDownStatus="goto" v-show="dropDownVisibility === 'visible'" />
        </li>
        <li class="ml-4">
          <router-link to="/tasks">Tasks</router-link>
        </li>
      </ul>
      <ul class="text-sm flex justify-end lg:flex-grow" v-else>
        <li>
          <router-link to="/login" class="hover:text-yellow active:text-yellow">Login</router-link>
        </li>
        <li class="ml-4">
          <router-link class="rounded-full bg-yellow text-white py-2 px-4 hover:border hover:border-yellow hover:bg-transparent hover:text-yellow hover:rounded-full" to="/register">Get Started</router-link>
        </li>
      </ul>
    </div>
    <!-- <div :class="tog" class="block lg:hidden" @click="toggle()">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </button>
    </div> -->
  </nav>
</template>

<script>
import AccDropDown from "@/components/AccDropDown";
import { mapGetters } from "vuex";

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
      tog: "sm-menu"
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    ...mapGetters({
      user: "profile"
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
