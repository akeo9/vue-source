<script setup>
    import { ref, onMounted } from 'vue'

    const audio = ref(null)

    const props = defineProps({
        title: String,
      
        audioFile: String
    })
    /*
    function getImageUrl() {
        return new URL(`../assets/images/${props.imageFile}`, import.meta.url)
    }
    */
    function getAudioUrl() {
        return new URL(`../assets/audio/${props.audioFile}`, import.meta.url)
    }

    onMounted(() => {
        audio.value.src = getAudioUrl()
    })

</script>

<template>
    <div id = "song">
        <h5>{{ title }}</h5>
        <audio ref="audio" controls></audio>
    </div>
</template>

<style>
    audio, h5 {
        display: block;
        padding: auto;
        margin: 5px
    }

</style>