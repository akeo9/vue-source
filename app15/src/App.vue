<script setup>
  import { ref } from 'vue'
  
  const imgSrc = ref("panda.jpeg")
  const show = ref(false)
  const pic = ref(false)
</script>

<template>
  <main>
  <button @click="show =! show">Click Here!</button>
  <Transition name="message">
    <div v-if="show" class="box">
      <p> Hey! How's it going? </p>
      <button @click="pic =! pic">Now Click Here for a Surprise!</button>
        <Transition name="panda">
          <div v-if="pic" class="img">
            <img :src="imgSrc">
            <p>I'm a Panda :)</p>
          </div>
        </Transition>
    </div>
  </Transition>
  </main>
</template>

<style>
.box {
  background-color: #c0ded9;
  border: none;
  border-radius: 5px;
  padding: 50px;
  margin: 5px;
}

.message-enter-active,
.panda-enter-active {
  animation: bounce-in 0.5s;
}

.message-leave-active,
.panda-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform:scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

p {
  text-align: center;
  font-size: 30px;
}

button {
  border: none;
  border-radius: 5px;
  background-color: #b2c2bf;
  color: white;
  padding: 12px 16px;
  margin: 4px 2px;
  cursor: pointer;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: none;
  border-radius: 5px;
  width: 60%;  
}
</style>