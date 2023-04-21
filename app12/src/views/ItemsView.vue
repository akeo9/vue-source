<script setup>
  import { useRouter } from 'vue-router'
  import routes from '../router/items/sleepingPanda.js'
  import routes2 from '../router/items/sillyPanda.js'
  import routes3 from '../router/items/eatingPanda.js'
  import routes4 from '../router/items/babyPanda.js'
  import routes5 from '../router/items/redPanda.js'

  const router = useRouter()

  function link() {
    for (let route of routes) {
      router.addRoute(route)
    }
    router.replace("/sleepingPanda")
  }

  function link2() {
    for (let route of routes2) {
      router.addRoute(route)
    }
    router.replace("/sillyPanda")
  }

  function link3() {
    for (let route of routes3) {
      router.addRoute(route)
    }
    router.replace("/eatingPanda")
  }

  function link4() {
    for (let route of routes4) {
      router.addRoute(route)
    }
    router.replace("/babyPanda")
  }

  function link5() {
    for (let route of routes5) {
      router.addRoute(route)
    }
    router.replace("/redPanda")
  }
</script>

<template>
  <div>
    <h1> Items </h1>

    <button @click=link type="button">Sleeping Panda</button><br><br>
    <button @click=link2 type="button">Silly Panda</button><br><br>
    <button @click=link3 type="button">Eating Panda</button><br><br>
    <button @click=link4 type="button">Baby Panda</button><br><br>
    <button @click=link5 type="button">Red Panda</button>

  </div>
</template>

<style>
  button {
    background-color: darkseagreen;
    border: none;
    color: white;
    padding: 14px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border: none;
    border-radius: 10px;
  }

  button:hover {
    background-color:darkolivegreen;
    
  }
</style>
