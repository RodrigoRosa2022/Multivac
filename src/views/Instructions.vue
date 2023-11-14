<template>
  <NavBar />
  <div class="instructions">
    <h1>Instructions</h1>
    <p class="paragraph">This page is a prank. There is no supercomputer to answer your questions.<br></p>
    <p class="paragraph">Call a friend and tell him this robot can answer anything.<br></p>
    <p class="paragraph">Log in with any username, it doesn't matter. Use as a password anything that starts with "kk"<br></p>
    <p class="paragraph">Ask your friend what question he wants to ask.<br></p>
    <p class="paragraph">At the terminal, type the secret sign "kk" and then the answer of your friends question, while the page fools any viewer that you are making a sweet introduction for the robot.<br></p>
    <p class="paragraph">Finished typing the answer, press "kk" or enter button and then finish the automatic introduction as short as you can and make the question. Finish it with the enter button.<br></p>
    <p class="paragraph">The Robot will show the answer you provided secretly previously.</p>

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

<style scoped>
p.paragraph {
  color: #F8F48A;
}
</style>