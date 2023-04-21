<script>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView name="header" />
    <RouterView name="leftShort" color="#deeaee" />
    <RouterView name="rightLong" style="background-color: #b1cbbb" />
    <RouterView name="leftLong" style="background-color: #eea29a" />
    <RouterView name="rightShort" style="background-color: #deeaee" />
    <RouterView name="footer" style="background-color: #c94c4c" />
  </main> 
</template>

<style>
body {
  padding: 5px;
  margin: 5px;
}

#app {
  height: calc(100vh - 40px);

  display: flex;
  flex-direction: column;

  padding: 10px;
}

main {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;

  flex-grow: 1;
}

.block {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

</style>
