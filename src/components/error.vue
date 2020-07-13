<template>
  <div class="flex justify-between bg-red-400 p-3 rounded-full text-white w-10/12 mx-auto my-5">
    <small class="bg-red-700 rounded-full px-2">Error</small>
    <p class="text-red-600 text-center">{{errTitle}}</p>
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
</style>