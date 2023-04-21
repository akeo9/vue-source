<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const imgSrc = ref("eatingPanda.jpeg")
const router = useRouter()

</script>

<template>
    <main>
        <h1>Eating Panda</h1>
        <img :src="imgSrc" />
        <br><br>
        <p>Donec sapien lacus, porta et dictum eget, interdum ac massa. Suspendisse quis nulla eget risus blandit laoreet. Praesent ornare libero ornare ornare efficitur. Vestibulum at interdum ipsum, id sodales arcu. Proin dignissim, leo fermentum elementum congue, diam erat varius nulla, eget convallis ligula velit sit amet mauris. Integer sollicitudin at sem vel consectetur. Maecenas ut lacus ut lectus convallis pretium nec at nisi. Morbi pellentesque laoreet cursus. Praesent id porttitor sem. Nam consectetur pharetra quam. Pellentesque id neque quam. Vestibulum vel turpis suscipit, ultrices dolor ullamcorper, condimentum nisi. Nullam sollicitudin enim sit amet aliquam egestas. Vestibulum enim sem, eleifend quis bibendum a, vehicula ut sem. Nulla facilisi.</p>
        <br>
        <p>Vivamus interdum nibh laoreet, condimentum elit sit amet, tincidunt lectus. Fusce pretium, nunc eget consequat ornare, nisl arcu bibendum metus, vel vulputate elit elit eget sem. Suspendisse varius, enim vitae bibendum suscipit, augue lorem hendrerit quam, quis aliquam purus lectus a eros. Maecenas hendrerit nulla nibh, sed malesuada mi malesuada ut. Quisque sollicitudin risus tincidunt ligula tempus euismod. Morbi nec ante eget neque facilisis porttitor. In erat dui, vehicula nec viverra nec, consectetur non ipsum. Sed sit amet lectus accumsan, varius arcu et, euismod mi.</p>
    </main>
</template>

<style>
img {
    width: 100%;
}
</style>