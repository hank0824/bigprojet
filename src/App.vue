<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "./assets/all.scss";
</style>

<script>
export default {
  name: 'App',
  created() {
    const api = 'https://vue-course-api.hexschool.io/api/hank/products';

    this.$http.get(api).then(response => {
      console.log(response);
    });
  }
}

</script>



