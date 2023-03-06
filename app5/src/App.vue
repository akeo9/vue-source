<script setup>
import {ref} from 'vue'

const title = ref ("Forms")

const subTitle = ref ("Arbitrary Text")
const subTitle2 = ref ("Validated Text")
const subTitle3 = ref ("Programmable Selection Controls")
const subTitle4 = ref ("Numeric Selection and Display Controls")

</script>

<template>
<div>
<h1> {{title}} </h1><br>

<form>
  <h2> {{subTitle}} </h2>
  <label for= "input">Text</label><br>
  <input type= "text" id= "input" size= "25"><br>
  <br>
  <label for= "search">Search</label><br>
  <input type= "search" id= "search">
  <button>Search</button><br>
  <br>
  <label for= "textArea">Text Area</label><br>
  <textarea id= "textArea" name= "textArea" rows= "5" cols= "25"></textarea><br>
  <br>

  <h2> {{subTitle2}} </h2>
  <label for= "email">Email</label><br>
  <input type= "email" id= "email" size = "25"><br>
  <br>
  <label for="phone">Phone Number</label><br>
  <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required><br>
  <br>
  <label for="url">URL</label><br>
  <input type="url" name="url" id="url" 
    placeholder="https://example.com"
      pattern="https://.*" size="25"
  required><br>
  <br>
  
  <h2> {{subTitle3}} </h2>
  <legend>Choose a city:</legend>
  <div>
    <input type="checkbox" id="NYC" name="NYC">
    <label for="NYC"> New York City</label>
  </div>
  <div>
    <input type="checkbox" id="Orlando" name="Orlando">
    <label for="Orlando"> Orlando</label>
  </div>
  <div>
    <input type="checkbox" id="DC" name="DC">
    <label for="DC"> Washington DC</label>
  </div>
<br>
  <legend>Select a brand:</legend>
  <div>
    <input type="radio" id="nike" name="nike">
    <label for="nike"> Nike</label>
  </div>
  <div>
    <input type="radio" id="adidas" name="adidas">
    <label for="adidas"> Adidas</label>
  </div>
  <div>
    <input type="radio" id="puma" name="puma">
    <label for="puma"> Puma</label>
  </div>
  <br>
  <label for="candy">Choose a candy:</label><br>
  <input list="candyType" id="candy" name="candy">
  <datalist id="candyType">
    <option value="Sour Patch"></option>
    <option value="Air Heads"></option>
    <option value="Swedish Fish"></option>
    <option value="Skittles"></option>
    <option value="Nerds"></option>
  </datalist><br>
  <br>
  <label for="city">Choose a city:</label><br>
  <select id="city">
    <option value="">--Please choose a city--</option>
    <option value="NYC">New York City</option>
    <option value="Orlando">Orlando</option>
    <option value="DC">Washington DC</option>
    <option value="Philadelphia">Philadelphia</option>
    <option value="Richmond">Richmond</option>
  </select><br>
  <br>

  <h2> {{subTitle4}} </h2><br>
  <label for="siblings">Number of siblings: </label>
  <input type="number" id="siblings" name="siblings" min="0" max="15"><br>
  <br>
  <p>How was your day today?</p><br>
  <div>
    <input type="range" id="rank" name="rank" min="0" max="10">
    <label for="rank"> Great!</label>
  </div><br>
  <br>
  <label for="grad">Graduation in progress: </label>
  <progress id="grad" max="100" value="62.5">62.5%</progress><br>
  <br>
  <label for="energy">Energy level:  </label>
  <meter id="energy" min="0" max="100" low="40" high="70" optimum="80" value="75"></meter><br>
  <br>
  <label for="start">Start date: </label>
  <input type="date" id="start" name="classStart" value="2023-01-31" min="2018-07-01" max="2024-04-30"><br>
  <br>
  <label for="startTime">Start time: </label>
  <input type="time" id="startTime" name="startTime" min="01:00" max="12:00" required><br>
  <br>
  <label for="appt">Appointment time and date: </label>
  <input type="datetime-local" id="appt" name="appt"
    value="2023-01-31" min="2023-01-31" max="2023-12-31"><br>
  <br>
  <p>Choose a color:</p>
  <div>
    <input type="color" id="color" name="color"
      value="#e66465">
    <label for="color"></label>
  </div><br>
  <label for="file">Choose a file: </label><br>
  <input type="file" id="file" name="file"><br>
  <br>
  <input type="submit" value="Submit"/>
  <input type="reset" value="Reset">
  <Image>
  <input type="image" id="image" alt="Login"
    src="/butterfly.jpeg">
  </Image>
  <input class="button"
    type="button"
    value="Button">
  <button class="button"
        type="button">Custom</button>


  </form>
</div>
</template>

<style>

</style>