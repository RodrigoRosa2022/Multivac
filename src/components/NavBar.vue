<template>
  <nav>
    <router-link to="/">Home</router-link>    
    <router-link to="/instructions">Instructions</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
nav {
  padding: 10px;
}
nav a {
  margin: 10px;
  text-decoration: none;
  color: white;
  font-size: 20px;
}

</style>