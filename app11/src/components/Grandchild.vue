<script setup>
import Child from './Child.vue'
import { provide } from 'vue'

provide('grandchildValue', 'Value from grandchild component')
</script>

<template>
    <div class="grandchild">
        <h2>Grandchild Component</h2>
        <Child />
    </div>
</template>

<style>
.grandchild {
    border: 2px solid lightseagreen;
    padding: 10px;
}
</style>