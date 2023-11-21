<template>
  <div v-if="showModal">
    <Modal :header="header" :text="text" @close="UserModal" />
  </div>
  <NavBar />
  <div class="home">
    <div class="logo">
      <h1>The Multivac</h1>
      <p>The Retrofuturistic Oracle with an Infinite Improbability Twist.</p>
      
      <img src="../assets/multivac.jpg" alt="Multivac Terminal">
      <button @click="UserModal">Play</button>
    </div>
  </div>
  <Footer />
</template>

<script>
import Terminal from '@/components/Terminal.vue'
import Modal from '@/components/Modal.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'HomeView',
  components: {
    Terminal,Modal,NavBar, Footer
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



.home {
  gap: 16px;
  flex-grow: 1;
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
  color:#F8F48A;
}


  @media (max-width: 450px) {

    .logo img {
      width: 90%;
      height: auto;
      }
    
    h1 {
    font-size: 40px;
    margin: 10px;
    }

  }
  

</style>

