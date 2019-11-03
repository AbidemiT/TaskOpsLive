<template>
  <div class="err">
    <p>{{errTitle}}</p>
  </div>
</template>

<script>
export default {
    name: 'ErrorPop',
    props: {
        errTitle: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
  .err {
    width: 60%;
    margin: 20px auto;
    text-align: center;
    background: rgb(243, 120, 120);
    padding: 10px;
    border-radius: 10px;
    color: #fff;
  }
</style>