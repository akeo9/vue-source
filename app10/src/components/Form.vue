<script setup>
    import {computed} from 'vue'

    const props = defineProps(['name', 'animal'])
    const emit = defineEmits(['update:name', 'update:animal', 'addCard'])

    const value1 = computed({
            get() {return props.name},
            set(arg) {emit('update:name', arg)}
    })

    const value2 = computed({
            get() {return props.animal},
            set(arg) {emit('update:animal', arg)}
    })

</script>

<template>
    <div id=form>
        <form>
            <div id="card">
                <label for="name">Name</label>
                <input id="name" v-model="value1"/>
            
                <label for="animal">Favorite Animal</label>
                <input id="animal" v-model="value2"/>
                
                <button type="button" @click="$emit('addCard')">Add Card</button>
            </div>
        </form>
    </div>
</template>

<style>
#card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    border: solid 1px lightgray;

    margin: 0 30px;
}
</style>