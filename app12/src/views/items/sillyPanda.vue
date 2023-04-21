<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const imgSrc = ref("sillyPanda.jpeg")
const router = useRouter()

</script>

<template>
    <main>
        <h1>Silly Panda</h1>
        <img :src="imgSrc" />
        <br><br>
        <p>Vivamus non fermentum enim, non bibendum massa. Morbi consectetur imperdiet gravida. Ut est sapien, convallis malesuada tortor et, fringilla consequat neque. Cras aliquet mi sit amet leo suscipit tempus. Aliquam pellentesque lorem ac rutrum blandit. Integer tempor est ac turpis consequat porttitor. Proin non augue quis orci condimentum efficitur. Nunc quis placerat tortor, et dignissim arcu. Phasellus in metus ut urna lobortis condimentum ac vitae nisi. Proin vel ante volutpat est imperdiet venenatis id vel leo.</p>
        <br>
        <p>Praesent elementum lorem magna, sed gravida metus dapibus at. Curabitur id lorem nibh. Etiam gravida felis et urna faucibus, eu feugiat justo tempus. Integer nec ipsum eu augue fringilla feugiat nec ut nibh. Nulla molestie felis ut dolor feugiat rhoncus. Nam ut aliquam diam, eget ornare diam. Vivamus sed aliquam massa. Suspendisse potenti. Sed eget cursus mauris. Suspendisse consequat vehicula nisl quis tempor. Maecenas elit elit, maximus vitae augue vitae, porttitor elementum massa. Donec sem dolor, lacinia quis dapibus ornare, consectetur ac elit.</p>
    </main>
</template>

<style>
img {
    width: 100%;
}
</style>