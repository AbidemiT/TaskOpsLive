<template>
  <div >
    <Navbar></Navbar>
    <div class="">
      <err v-if="errUpdate == 'Error'" errTitle="Email or Password Not Correct" />
      <Spinner v-if="spinner == 'Spin Loading'" />
      <div class="login-container">
        <div class="heading">
          <h2>LOGIN</h2>
        </div>
        <form @submit.prevent="validateLogin">
          <div class="input-block">
            <label for="email">Email:</label>
            <input type="email" placeholder="Enter your email" v-model="user.email" required />
          </div>
          <div class="input-block">
            <label for="password">Password:</label>
            <input type="password" placeholder="Enter password" v-model="user.password" required />
          </div>
          <button>Login</button>
        </form>
        <small>
          Not a user?
          <router-link to="/register">SignUp</router-link>
        </small>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import err from "@/components/error.vue";
import Spinner from "@/components/spinner.vue";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Foot from "@/components/Foot.vue";

export default {
  components: {
    err,
    Spinner,
    Navbar,
    Sidebar,
    Foot
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      errUpdate: "No Error",
      spinner: "No Spin"
    };
  },
  methods: {
    validateLogin() {
      this.spinner = "Spin Loading";
      this.$store
        .dispatch("login", this.user)
        .then(() => {
          this.$router.push("/tasks");
          Toast.fire({
            type: "success",
            title: "Logged in successfully"
          });
        })
        .catch(err => {
          this.spinner = "No Spin";
          this.errUpdate = "Error";
          setTimeout(() => {
            this.errUpdate = "No Error";
          }, 5000);
          this.$router.push("/login");
          this.user = "";
        });
    }
  }
};
</script>

<style>
</style>
