<script>
    import { RouterLink } from 'vue-router'

</script>

<template>
    <nav>
        <li><RouterLink to="/" class="link">Home</RouterLink></li>
        <li><RouterLink to="/items" class="link">Items</RouterLink></li>
    </nav>
</template>

<style>
    nav {
       list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color:darkseagreen ;
    } 

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover {
        background-color:darkolivegreen;
    }
</style>