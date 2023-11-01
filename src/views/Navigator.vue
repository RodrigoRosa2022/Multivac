 <template>
  <NavBar />
  <p>The navigator name is: {{$route.params.navigator}}</p>
  <div class="home">
    <div class="logo">
      <h1>The Multivac</h1>
    </div>
    <div class="main">
      <img src="../assets/multivac.jpg" alt="Multivac Terminal" height="400">
      <Terminal :user="$route.params.navigator"  />
    </div>
  </div>
  <Footer />
</template>

<script>
import Terminal from '@/components/Terminal.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'



export default {
  name: 'HomeView',
  components: {
    Terminal,NavBar, Footer
  },
  data() {
    return {
    }
  },
  methods: {

    }
  }

</script>

<style scoped>

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

.main {
  display: flex;
  flex-direction: row;
}

</style>

