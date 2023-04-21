<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const imgSrc = ref("redPanda.jpeg")
const router = useRouter()

</script>

<template>
    <main>
        <h1>Red Panda</h1>
        <img :src="imgSrc" />
        <br><br>
        <p>Curabitur facilisis metus vitae pulvinar lobortis. Nulla dictum ante in lectus suscipit, at fringilla nibh ultricies. Maecenas pretium ut quam in congue. Nam ullamcorper enim quis vehicula molestie. Phasellus quis faucibus felis. Sed posuere vel lorem eget condimentum. Phasellus dapibus tempor lacus et feugiat. Curabitur molestie nibh ut magna vestibulum, vel ultricies sapien efficitur. Suspendisse ullamcorper risus mattis eros lacinia, id sagittis quam rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus facilisis mattis bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum molestie lorem ac sagittis mattis. Cras bibendum purus egestas hendrerit laoreet.</p>
        <br>
        <p>Donec sapien lacus, porta et dictum eget, interdum ac massa. Suspendisse quis nulla eget risus blandit laoreet. Praesent ornare libero ornare ornare efficitur. Vestibulum at interdum ipsum, id sodales arcu. Proin dignissim, leo fermentum elementum congue, diam erat varius nulla, eget convallis ligula velit sit amet mauris. Integer sollicitudin at sem vel consectetur. Maecenas ut lacus ut lectus convallis pretium nec at nisi. Morbi pellentesque laoreet cursus. Praesent id porttitor sem. Nam consectetur pharetra quam. Pellentesque id neque quam. Vestibulum vel turpis suscipit, ultrices dolor ullamcorper, condimentum nisi. Nullam sollicitudin enim sit amet aliquam egestas. Vestibulum enim sem, eleifend quis bibendum a, vehicula ut sem. Nulla facilisi.</p>
    </main>
</template>

<style>
img {
    width: 100%;
}
</style>