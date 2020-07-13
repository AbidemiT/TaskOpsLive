<template>
  <div>
    <Navbar></Navbar>
    <div class="pb-10">
      <err v-if="errUpdate == 'Error'" errTitle="Credentials  needs to be unique !!!" />
      <Spinner v-if="spinner == 'Spin Loading'" />
      <div class="login-container">
        <div class="heading">
          <h2>SIGNUP</h2>
        </div>
        <form @submit.prevent="validateForm">
          <div class="input-block">
            <label for="name">Full Name</label>
            <input type="text" placeholder="Enter your full name" v-model="user.name" required />
          </div>
          <div class="input-block">
            <label for="email">Email</label>
            <input type="email" placeholder="Enter your email" v-model="user.email" required />
          </div>
          <div class="input-block">
            <label for="password">Password</label>
            <input
              :class="{isErr:error}"
              type="password"
              placeholder="Enter password"
              v-model="user.password"
              @keyup="check"
            />
            <small
              v-if="passErr == 'Error'"
              class="passError"
            >Password Length should be equal or greater than 7</small>
          </div>
          <div class="input-block">
            <label for="password">Confirm Password</label>
            <input type="password" placeholder="Confirm password" v-model="cpassword" />
          </div>
          <small class="error" v-if="errMessage">Passwords doesn't match</small>
          <button>Signup</button>
        </form>
        <small>
          Already a user?
          <router-link to="/login">Login</router-link>
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
        name: "",
        email: "",
        password: ""
      },
      cpassword: "",
      error: false,
      errMessage: false,
      errUpdate: "No Error",
      spinner: "No Spin",
      passErr: "No Error"
    };
  },
  computed: {},
  methods: {
    validateForm() {
      if (this.user.password !== this.cpassword) {
        return (this.errMessage = true);
      }
      this.spinner = "Spin Loading";
      this.$store
        .dispatch("register", this.user)
        .then(() => {
          this.$router.push("/tasks");
          Toast.fire({
            type: "success",
            title: "Signed in successfully"
          });
        })
        .catch(err => {
          this.spinner = "No Spin";
          this.errUpdate = "Error";
          setTimeout(() => {
            this.errUpdate = "No Error";
          }, 5000);
          this.$router.push("/register");
          this.user = "";
          this.cpassword = "";
        });
    },
    check() {
      if (!this.user.password && this.user.password.length == 0) {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 5000);
      } else {
        return (this.error = false);
      }

      if (this.user.password.length < 7) {
        this.passErr = "Error";
        setTimeout(() => {
          this.passErr = "No Error";
        }, 5000);
      } else {
        return (this.passErr = "No Error");
      }
    }
  }
};
</script>

<style scoped>
.error,
.passError {
  color: red;
  font-size: 0.8rem;
  text-align: center;
}
</style>
