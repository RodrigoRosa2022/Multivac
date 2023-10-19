<template>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About'}">About</router-link>
    <router-link :to="{ name: 'Instructions'}">Instructions</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>