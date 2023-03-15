<script setup>
import { inject } from 'vue';

const childValue = inject('childValue')
const grandchildValue = inject('grandchildValue')

</script>

<template>
<div class="parent">
    <h3>Parent Component</h3>
        <div class="container">
            <p>Child: {{ childValue }}</p>
            <p>Grandchild: {{ grandchildValue }}</p>
        </div>
    </div> 
</template>

<style>
.parent {
  border: 2px solid cornflowerblue;
  padding: 10px;
}
</style>
