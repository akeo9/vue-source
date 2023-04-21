<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const imgSrc = ref("babyPanda.jpeg")
const router = useRouter()

</script>

<template>
    <div>
        <h1>Baby Panda</h1>
        <img :src="imgSrc" />
        <br><br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu sapien in sapien sodales blandit. Nulla in turpis arcu. Sed quis sapien eu ante rutrum ultricies ac a ipsum. Cras vitae orci sed metus bibendum ultrices. Maecenas porttitor purus a dui porta bibendum. Donec lorem massa, faucibus quis est tristique, malesuada finibus metus. Duis bibendum luctus lorem ac porttitor. Morbi posuere est facilisis leo eleifend, vel fermentum metus tempor. Praesent a fringilla metus, eu porta sapien. Mauris finibus quis sapien vel tempor. Curabitur egestas ultrices mi, quis pulvinar orci. Phasellus ante tellus, malesuada sed ultrices non, consectetur non nulla. Donec libero tellus, condimentum id sem et, hendrerit varius nisi.</p>
        <br>
        <p>Nullam congue, nulla a placerat commodo, sem dolor viverra nunc, non rutrum urna ante nec nisl. Nam a scelerisque massa. Sed sed pretium nunc. Mauris elementum venenatis maximus. Nunc faucibus lacus vitae luctus convallis. Phasellus elementum ipsum vitae dui pulvinar, vulputate eleifend odio fringilla. Nam ut tincidunt odio. Morbi placerat id est accumsan consequat. Ut eros diam, sollicitudin in volutpat sit amet, egestas eget nulla.</p>
    </div>
</template>

<style>
img {
    width: 100%;
}
</style>