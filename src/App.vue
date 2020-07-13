<template>
  <div id="app relative">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
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
