<script setup>
    import { ref } from 'vue'
    const imgSrc = ref("pexels-dom-gould-325.jpg")
    const imgSrc = ref("pexels-paul-ijsendoorn-33041.jpg")
    const imgSrc = ref("pexels-pixabay-147411.jpg")

</script>

<template>
    <img :src="imgSrc" />
</template>