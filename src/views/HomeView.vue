<template>
  <div v-if="showModal">
    <Modal :header="header" :text="text" @close="UserModal" />
  </div>
  <nav>
    <a href="#">Home</a>
    <a href="#">Instructions</a>
    <a href="#">About</a>
  </nav>
  <div class="home">
    <div class="logo">
      <h1>The Multivac</h1>
      <p>The Retrofuturistic Oracle with an Infinite Improbability Twist.</p>
      
      <img src="../assets/multivac.jpg" alt="Multivac Terminal" height="400">
      <button @click="UserModal">Play</button>
    </div>
      <!-- <Terminal /> -->
  </div>
  <footer>
    <p>Coded with sweat, blood and tears.<br>Original Website by Rodrigo Rosa</p>
  </footer>
</template>

<script>
import Terminal from '@/components/Terminal.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'HomeView',
  components: {
    Terminal,Modal
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
  UserModal() {
    this.showModal = !this.showModal
  }

    }
  }

</script>

<style scoped>
nav {
  padding: 10px;
}
nav a {
  margin: 10px;
  text-decoration: none;
  color: white;
  font-size: 20px;
}
.home {
  gap: 16px;
  height: 80%;
}

h1 {
  text-align: center;
  font-size: 60px;
  margin: 10px;
}

p {
  color: #F8F48A;
}

.logo {
  border-right: 1px solid;
  width: 100%;
  height: 100%;
  text-align: center;
}

.logo p {
  margin: auto;
  text-align: center;
}

.logo img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 400px;
}

button {
  background-color: #F8F48A;
  font-size: 35px;
  border-radius: 30px;
  padding: 5px 20px;
  cursor: pointer;
  margin: 20px;
  color: black;
  
}

button:hover{
  background-color: black;
  color:#F8F48A
}


footer {
  color: white;
  margin-top: 40px;
}

</style>

