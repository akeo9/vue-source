<script setup>
import { ref } from 'vue'
import Audio from './components/Audio.vue'

let showImages = ref(true)

let where = {
  title: "Where Have You Been",
  audioFile: "Rihanna_Where_Have_You_Been.mp3"
}

let onlyGirl = {
  title: "Only Girl in the World",
  audioFile: "Rihanna_Only_Girl_In_The_World_.mp3"
}

let foundLove = {
  title: "We Found Love",
  audioFile: "Rihanna_We_Found_Love_Lyrics_ft_Calvin_Harris.mp3"
}

let rudeBoy = {
  title: "Rude Boy",
  audioFile: "Rihanna_Rude_Boy.mp3"
}

let work = {
  title: "Work",
  audioFile: "Rihanna_Work_Lyrics_ft_Drake.mp3"
}

let wildThoughts = {
  title: "Wild Thoughts",
  audioFile: "DJ_Khaled_ft_Rihanna_Bryson_Tiller_Wild_Thoug.mp3"
}

let pour = {
  title: "Pour It Up",
  audioFile: "Rihanna_Pour_It_Up.mp3"
}

let lights = {
  title: "All of the Lights",
  audioFile: "All_Of_The_Lights.mp3"
}

let umbrella = {
  title: "Umbrella",
  audioFile: "Rihanna_Umbrella_Lyrics_ft_JAY_Z.mp3"
}

let diamonds = {
  title: "Diamonds",
  audioFile: "Rihanna_Diamonds.mp3"
}

</script>

<template>
  <div>
    <h1>Rihanna's Super Bowl Halftime Performance</h1><br>
    <main>
      <section>
        <Audio v-if="showImages" v-bind="onlyGirl"/><br>
        <Audio v-if="showImages" v-bind="where"/><br>
        <Audio v-if="showImages" v-bind="foundLove"/><br>
        <Audio v-if="showImages" v-bind="rudeBoy"/><br>
        <Audio v-if="showImages" v-bind="work"/><br>
        <Audio v-if="showImages" v-bind="wildThoughts"/><br>
        <Audio v-if="showImages" v-bind="pour"/><br>
        <Audio v-if="showImages" v-bind="lights"/><br>
        <Audio v-if="showImages" v-bind="umbrella"/><br>
        <Audio v-if="showImages" v-bind="diamonds"/>
      </section>
    </main>
  </div>
</template>

<style>

</style>