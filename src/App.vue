<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
  name: 'App',
  created() {
    const api = 'https://vue-course-api.hexschool.io/api/hank/products';
    this.$http.get(api).then(response => {
      console.log(response);
    });
  },
  data: () => ({
    x: 0,  //宣告x變數
  }),
  methods: {
    plus() {
      this.x += 5;
    }
  }

}




</script>



<template>
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-dark">Dark</button>
  <a href="" class="link-primary">123123</a>
  <RouterView />
</template>

<style lang="scss">
@import "./assets/all.scss";
</style>
