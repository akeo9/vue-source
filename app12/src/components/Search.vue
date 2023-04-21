<script setup>
    import { useRoute, useRouter } from 'vue-router'
    import { ref } from 'vue'
</script>

<template>
    <div>
        <form>
            <input type="text" v-model="input" placeholder="Search items" />
            
        </form>
    </div>
</template>

<style>

</style>