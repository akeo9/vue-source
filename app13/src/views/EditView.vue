<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import { useUserStore } from '../stores/user.js'

const user = useUserStore();

const firstName =  ref(user.info.fname)
const lastName = ref(user.info.lname)
const streetAddr = ref(user.info.street)
const city = ref (user.info.city)
const state = ref(user.info.state)
const zip = ref(user.info.zip)


function submitForm() {
    user.info = {
        fname: firstName.value,
        lname: lastName.value,
        street: streetAddr.value,
        city: city.value,
        state: state.value,
        zip: zip.value
    };
}
</script>

<template>
    <main>
        <nav>
            <NavBar />
        </nav>

        <h1> Edit </h1>

        <form @submit.prevent="submitForm">
            <label for="firstName">First Name: </label>
            <input v-model="firstName" name="firstName" type="text" />
            <label for="lastName">Last Name: </label>
            <input v-model="lastName" name="lastName" type="text" />
            <br>
            <label for="streetAddr">Street: </label>
            <input v-model="streetAddr" name="streetAddr" type="text" />
            <label for="city">City: </label>
            <input v-model="city" name="city" type="text" />
            <br>
            <label for="state">State: </label>
            <input v-model="state" name="state" type="text" />
            <label for="zip">Zip Code: </label>
            <input v-model="zip" name="zip" type="text" />
            <button class="button">Submit</button>
        </form>
    </main>
</template>

<style>
input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}

form {
    border-radius: 5px;
    background-color: #e5dfdf;
    padding: 20px;
}

button {
    border: none;
    border-radius: 5px;
    background-color: darkolivegreen;
    color: white;
    padding: 12px 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>
