<template>
  <div class="home">
    <div class="logo">
      <h1>The Multivac</h1>
      <img src="../assets/multivac.jpg" alt="Multivac Terminal" height="400">
      <p>The Retrofuturistic Oracle with an Infinite Improbability Twist.</p>

    </div>
      <Terminal />
  </div>
  <footer>
    <p>Coded with sweat, blood and tears.<br>Original Website by Rodrigo Rosa</p>
  </footer>
</template>

<script>
import Terminal from '@/components/Terminal.vue'

export default {
  name: 'HomeView',
  components: {
    Terminal
  }
}
</script>

<style scoped>
.home {
  display: flex;
  /* flex direction: column; */
  gap: 16px;
  height: 80%;
}

h1 {
  center: aligned;
  font-size: 60px;
}
.logo {
  border-right: 1px solid;
  border-image: linear-gradient (red, white) 1;
  width: 50%;
  height: 100%;
  text-align: center;
}

.logo p {
  width: 230px;
  margin: auto;
  /* margin: 20px; */
}

.logo img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  /* width: 100%; */
}

.filler {
  height: 30px;
}

footer {
  text-align: center;
  margin-top: 40px;
}

</style>

