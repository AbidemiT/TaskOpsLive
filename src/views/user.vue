<template>
  <div class="container">
    <h1>Name: {{user.name}}</h1>
    <hr>
    <h3>Email: {{user.email}}</h3>
    <hr>
    <h5>Joined: {{user.createdAt}}</h5>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            user: 'user'
        })
    },
    methods: {
        upload() {
        //     axios({
        //   url: "http://127.0.0.1:4000/users/me/avatar",
        //   data: user,
        //   method: "POST"
        // })
            // console.log(this.$refs.img.value);
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    width: 80%;
    margin: 20px auto;

    hr {
        margin-top: 5px;
    }
}
</style>