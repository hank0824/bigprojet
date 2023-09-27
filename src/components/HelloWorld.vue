<template>
  <div class="bg" @click="callFather">
    1231313
    {{ parentMsg }}
  </div>
</template>

<script>
export default {
  props: ["parentMsg"],
  methods: {
    callFather() {
      this.$emit('callFather', this.parentMsg);
    }
  },
}
</script>

<style scoped>
.bg {
  background-color: gray;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
}
</style>