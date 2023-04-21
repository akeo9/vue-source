<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const imgSrc = ref("sleepingPanda.jpeg")
const router = useRouter()

</script>

<template>
    <main>
        <h1>Sleeping Panda</h1>
        <img :src="imgSrc" />
        <br><br>
        <p>Nullam congue, nulla a placerat commodo, sem dolor viverra nunc, non rutrum urna ante nec nisl. Nam a scelerisque massa. Sed sed pretium nunc. Mauris elementum venenatis maximus. Nunc faucibus lacus vitae luctus convallis. Phasellus elementum ipsum vitae dui pulvinar, vulputate eleifend odio fringilla. Nam ut tincidunt odio. Morbi placerat id est accumsan consequat. Ut eros diam, sollicitudin in volutpat sit amet, egestas eget nulla.</p>
        <br>
        <p>Nam venenatis nisl sit amet est aliquet porta quis sed neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean est erat, imperdiet a mauris vel, ullamcorper consectetur felis. Nam sit amet venenatis eros. Suspendisse dictum semper est, at semper lorem consequat quis. Vivamus porta finibus lacus, sit amet ultrices nunc. Donec vitae dui ornare lectus vulputate viverra id non dolor. Phasellus lacinia pellentesque ipsum quis aliquet. Quisque tempus fringilla pulvinar. Sed lobortis, tortor vitae pellentesque venenatis, eros erat convallis eros, semper ornare libero felis id nisl. Praesent erat tortor, convallis ac iaculis vitae, molestie id est.</p>
    </main>
</template>

<style>
img {
    width: 100%;
}
</style>