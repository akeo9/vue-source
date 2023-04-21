<script setup>
  import { ref, reactive } from 'vue'
  import Form from './components/Form.vue';

  let cards = reactive([])

  const name = ref('')
  const animal = ref('')

  function addCard() {
    cards.push({
      name: name.value,
      animal: animal.value
    })
  }
</script>

<template>
  <div>
    <section>
      <div id="form">
          <Form 
            title="Name"
            v-model:name="name"
            v-model:animal="animal"
            @addCard="addCard" />
      </div>
    </section>

    <section id="card">
      <div v-for="card in cards">
          <span>{{ card }}</span><br>
      </div>
    </section>
    </div>
</template>

<style>
  main {
  display: flex;
  margin: 10px 10%;
  }
  section {
    margin: 10px;
  }
  #form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  #card {
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: solid 1px black;
  }
  button {
    margin: 3px 0 0 0;
  }
</style>