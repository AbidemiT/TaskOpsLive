<template>
  <div class="drop-down-container" @click="goto">
    <div class="drop-down">
      <router-link to="/user">Profile</router-link>
      <hr />
      <a class="cursor-pointer" @click="logOut">LogOut</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccDropDown',
  computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
  methods: {
    goto() {
      this.$emit('dropDownStatus', 'hidden')
    },
    logOut() {
        this.$store.dispatch('logout')
        .then(() => {
          Toast.fire({
            type: "success",
            title: "LoggedOut successfully"
          });
          this.$router.push('/login')
        })
      }
  }
}
</script>

<style lang="scss" scoped>
.drop-down-container {
  width: 100%;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 19px 38px rgba(236, 233, 233, 0.22),
    0 15px 12px rgba(236, 233, 233, 0.22);

  .drop-down {
    a {
      width: 100%;
      display: inline-block;
      color: #ff9c00;
      padding: 5px 10px;
      cursor: pointer;

      &:hover {
        color: rgba(255, 157, 0, 0.699);
      }
    }
  }
}

@media screen and (min-width: 786px){
  .drop-down-container {
  width: 100px;
  position: absolute;
  top: 75px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 19px 38px rgba(236, 233, 233, 0.22),
    0 15px 12px rgba(236, 233, 233, 0.22);

  .drop-down {
    a {
      width: 100%;
      display: inline-block;
      color: #ff9c00;
      padding: 5px 10px;
      cursor: pointer;

      &:hover {
        color: rgba(255, 157, 0, 0.699);
      }
    }
  }
}
}
</style>
