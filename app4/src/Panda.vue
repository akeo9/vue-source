<script setup>
    import {ref} from 'vue'
    import Image from './components/Image.vue'  

    const title = ref("Pandas")

    const textColor = ref("blue")
    function changeButton() {
        textColor.value = (textColor.value == 'blue') ? "red" : "blue"
    }   

    const loremIpsum = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis. Posuere lorem ipsum dolor sit amet consectetur. Et tortor consequat id porta nibh venenatis cras sed. Cursus in hac habitasse platea. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim.")
    const loremIpsum2 = ref("Posuere sollicitudin aliquam ultrices sagittis orci a. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Commodo nulla facilisi nullam vehicula ipsum. Aenean et tortor at risus viverra adipiscing at in.Metus vulputate eu scelerisque felis imperdiet proin. Magna fringilla urna porttitor rhoncus dolor purus non enim. Proin libero nunc consequat interdum varius.")
    const loremIpsum3 = ref("Eu turpis egestas pretium aenean pharetra magna ac. Convallis a cras semper auctor neque vitae. Sem fringilla ut morbi tincidunt augue. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Nullam ac tortor vitae purus. Ullamcorper morbi tincidunt ornare massa eget egestas purus.")
</script>

<template>
    <h1> {{title}} </h1>

    <Image/>
    
    <button @click="changeButton()">Surprise</button><br>
    <span v-bind:class="textColor">{{loremIpsum}}</span><br><br>
    <span v-bind:class="textColor">{{loremIpsum2}}</span><br><br>
    <span v-bind:class="textColor">{{loremIpsum3}}</span>
</template>

<style>
    .blue {
        color: blue;
        font-family: 'Times New Roman', Times, serif
    }

    .red {
        color: red;
        font-family: 'Courier New', Courier, monospace; 
        border-style: dashed;            
    }

    img {
        width: 400px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>