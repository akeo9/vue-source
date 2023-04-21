<script setup>
import NavBar from '../components/NavBar.vue'
import { useUserStore } from '../stores/user.js'

const user = useUserStore();

</script>

<template>
  <main>
    <nav>
      <NavBar />
    </nav>

    <h1> Home </h1>
    
    <div class="info">
      <div class="label">First Name:</div>
      <div class="value">{{ user.info.fname }}</div>

      <div class="label">Last Name:</div>
      <div class="value">{{ user.info.lname }}</div>

      <div class="label">Street Address:</div>
      <div class="value">{{ user.info.street }}</div>

      <div class="label">City:</div>
      <div class="value">{{ user.info.city }}</div>

      <div class="label">State:</div>
      <div class="value">{{ user.info.state }}</div>

      <div class="label">Zip Code:</div>
      <div class="value">{{ user.info.zip }}</div>
    </div>
    
  </main>
</template>

<style>
.label {
  font-weight: bold;
}

.value {
  margin-left: 10px;
}

.info {
  border-radius: 5px;
  background-color: #e5dfdf;
  padding: 20px;
}
</style>