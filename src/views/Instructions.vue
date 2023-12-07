<template>
  <NavBar />
  <div class="instructions">
    <h1>Instructions</h1>
    <p class="paragraph">This page is a prank. There is no supercomputer to answer your questions.<br></p>
    <p class="paragraph">Call a friend and tell him this robot can answer anything.<br></p>
    <p class="paragraph">Log in with any username, it doesn't matter. Use as a password anything that starts with "kk"<br></p>
    <p class="paragraph">Ask your friend what question he wants to ask.<br></p>
    <p class="paragraph">At the terminal, type the secret sign "kk" followed by the answer of your friends question. Don't worry, what you type won't show on the screen. Instead, a sweet introduction for the robot will be displayed.<br></p>
    <p class="paragraph">Finished typing the answer, press "kk" or enter button and then finish shortly the sweet introduction and then move on to the question. Finish it with the enter button.<br></p>
    <p class="paragraph">The Robot will show the answer you provided previously, as if it just popped out of his positronic mind.</p>

  </div>
  <Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {NavBar, Footer},

}
</script>

<style scoped>
p.paragraph {
  color: #F8F48A;
}

.instructions {
  
  flex-grow: 1;
  margin-left: 30px;
}
</style>