<script setup>
    import { ref } from 'vue'
    const imgSrc = ref("panda.jpeg")
</script>

<template>
    <img :src="imgSrc" />
</template>