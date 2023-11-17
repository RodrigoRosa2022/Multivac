<template>
<NavBar />
  <div class="about">
    <h1>About</h1>
    <div>I remember a software that run in Windows-DOS back in the 90's that used this same trick. It was called Mãe Diná or something like this, evoking paranormal/mistic powers.<br>
    My cousin tricked me and I, as a child, got very intriged.<br><br>
    My idea was to replicate the trick, but set in another background style (retrofuturistic with Isaac Asimov and Douglas Adams references).</div>
  </div>
  <Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'


export default {
  components: {NavBar,Footer}

}
</script>

<style scoped>
.about {  
  flex-grow: 1;
  margin-left: 30px;
}
</style>