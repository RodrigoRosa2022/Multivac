<template>
  <NavBar />
  <div class="instructions">
    <h1>This is an instructions page</h1>
    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, voluptatibus?</div>
  </div>
  <Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {NavBar, Footer}

}
</script>

<style>

</style>