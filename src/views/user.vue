<template>
  <div>
    <Navbar></Navbar>
    <div
      class="container rounded-md bg-white w-11/12 md:px-0 shadow-lg flex md:justify-between flex-wrap mx-auto"
    >
      <!-- <div class="img w-full md:w-4/12">
               <img class="w-full h-full" :src="user.avatar_url" :alt="user.name + ' Avatar'">
      </div>-->
      <div class="details w-full px-5 py-5">
        <div class="name mb-1 md:mb-3">
          <h1 class="text-lg text-blue-700 font-bold md:text-2xl">{{user.name}}</h1>
        </div>
        <div class="bio mb-1 md:mb-3">
          <h2 class="font-bold">{{user.email}}</h2>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Foot from "@/components/Foot.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  components: {
    Navbar,
    Foot
  },
  computed: {
    ...mapGetters({
      user: "user"
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