 <template>
  <NavBar />
  <div class="homeNavigator">
    <div class="logo">
      <h1>The Multivac</h1>
    </div>
    <div class="mainNavigator">
      <img src="../assets/multivac.jpg" alt="Multivac Terminal" class="imageNavigator">
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

.homeNavigator {
  gap: 16px;
  height: 80%;
  width: 95%;
  flex-grow: 1;
  overflow-y: auto;
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
  text-align: center;
}

.logo p {
  margin: auto;
  text-align: center;
}

img.imageNavigator {
  /* display: block; */
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  height: 350px;
}

.mainNavigator {
  display: flex;
  flex-direction: row;
  align-content: center;
  width: 95%;
}




@media (max-width: 800px) {

      .mainNavigator {
        flex-direction: column-reverse;
      }

      .screen {
        width: 90%;
      }

          img.imageNavigator {
            width: 230px;
            height: 230px;
          }
      
      h1 {
        font-size: 50px;
      }

    }

      @media (max-width: 450px) {    
    h1 {
    font-size: 40px;
    margin: 10px;
    }

  }

</style>

