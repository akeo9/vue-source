<script setup>
import Parent from './Parent.vue'
import { provide, inject } from 'vue'

const grandchildValue = inject('grandchildValue')
provide('childValue', 'Value from child component ')
</script>

<template>
    <div class="child">
      <h3>Child Component</h3>
        <p> Grandchild: {{ grandchildValue }}</p>
      <Parent />
    </div>
</template>

<style>
.child {
    border: 2px solid lightcoral;
    padding: 10px;
}
</style>