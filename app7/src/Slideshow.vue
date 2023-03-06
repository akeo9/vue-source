<script setup>
    import { ref, reactive } from 'vue'
    //import { createClient } from 'pexels'
    import { watch } from 'vue'
    //import { watchEffect } from 'vue'
    import { onMounted } from 'vue'
    
    const title = ref ("Landscapes")

    const collection = reactive({
        media: {},
    })

    const photo = reactive({
        name: "",
        photographer: "",
        photographer_url: "",
        url: ""
    })

    async function fetchCollection() {
 
        let url = "https://api.pexels.com/v1/collections?page=1&per_page=15"

        const options = {
            method: "GET",
            headers: {
            "Authorization": sajR5GW3huzASK9TKTJIbkC3qZwK0Hrf1ng2HOsSOIOIP9IIUX98ETf2,
            }
        }

        let response = await fetch(url, options)

        if (response.status == 200) {
            response = await response.json()
            console.log(response)
        }
        else {
            console.log("Cannot fetch collections")
            return
        }

        const id = response.collections[0].id
        console.log(id)

        // Get media from collection
        url = `https://api.pexels.com/v1/collections/${id}?type=photos&page=1&per_page=15`
        console.log(url)
    
        // use same options as above
        response = await fetch(url, options)

        if (response.status == 200) {
            const data = await response.json()
            console.log(data)

            collection.media = data.media  // save photos
        }
        else {
            console.log("Cannot fetch photos")
        }
    }
   
    watch(collection, () => {
        console.log("collection changed")

        if (collection.media.length > 0) {
            fetchCollection()
        }
    })
    /*
    watch(() => { return collection.media },
        (newValue, oldValue) => {
            console.log("collection changed")

            if(newValue.length > 0) {
                loadImage()
            }
        }
    )

    watchEffect(() => {
        console.log("collection changed")

        if (collection.media.length > 0) {
            loadImage()
        }
    })
    
    watch(source, callback, {
        flush: 'post'
    })
    */
    onMounted(() => {
        console.log("onmounted")
        fetchCollection()
    })
    
</script>

<template>
    <div>
        <h1> {{title}} </h1> 

        <img :src="photo.url">
        {{photo.title}} <br>
        <a :href="photo.photographer_url" target="blank"> {{photo.photographer}}</a>       
    </div>

</template>

<style>

</style>