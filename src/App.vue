<template>
  <div id="app" class="container">
    <Navbar @sidebarStatus="updateSidebar" />
    <Sidebar v-if="status" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Foot from "./components/Foot.vue";

export default {
  name: "app",
  components: {
    Sidebar,
    Navbar,
    Foot
  },
  data() {
    return {
      status: false
    };
  },
  methods: {
    updateSidebar(value) {
      if (value === "sm-menu") {
        this.status = false;
      } else {
        this.status = true;
      }
    }
  },
  created() {
    this.$axios.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout);
        }
        throw err;
      });
    });
  }
};
</script>

<style>
</style>
