<template>
  <nav>
    <router-link to="/">{{home}}</router-link>    
    <router-link to="/instructions">{{instructions}}</router-link>
    <router-link to="/about">{{about}}</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return{      
      home: null,
      instructions: null,
      about: null
    }

  },
  props:['language']
  ,
  methods: {
    languager() {
          if(this.language == "english") {
      this.home="Home"
      this.instructions="Instructions"
      this.about="About"
    }
    else {
      this.home="Início"
      this.instructions="Instruções"
      this.about="Sobre"
    }

    }

  }  ,
  mounted() {    
    this.languager()
  }
  ,
  updated(){    
    this.languager()
  }

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