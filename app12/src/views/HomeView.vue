<script setup>
  import { ref } from 'vue'
  const imgSrc = ref("panda.jpeg")
</script>

<template>
  <div>
    <h1> Home </h1>
    <img :src="imgSrc" />
  </div>
</template>

<style scoped>
  img {
    width: 100%;
  }
</style>