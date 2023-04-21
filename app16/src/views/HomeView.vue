<script setup>
  import { ref } from 'vue'
  
  const imgSrc = ref("party.jpeg")
  const show = ref(false)
</script>

<template>
  <main>
  <button @click="show =! show">Wanna Throw a Party!?</button>
  <Transition name="message">
    <div v-if="show" class="box">
      <p>Okay Let's Do It!!</p>
      <img :src="imgSrc">
    </div>
  </Transition>
  </main>
</template>

<style scoped>
.box {
  background-color: darkseagreen;
  border: none;
  border-radius: 5px;
  padding: 50px;
  margin: 5px;
}

.message-enter-active {
  animation: bounce-in 0.5s;
}

.message-leave-active {
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
  background-color: darkseagreen;
  color: white;
  padding: 30px 30px;
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