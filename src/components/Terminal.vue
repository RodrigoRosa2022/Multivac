<template>
<div class="screen">
  <p contenteditable="true" @input="keyPress()">teeste</p>
  <input type="text" class="input" @input="keyPress()">
</div>
</template>

<script>
export default {
  methods: {
    keyPress() {
      
      console.log("Key Pressed")
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.screen {
  padding-top: 10px;
  padding-left: 80px;
  border: 3px solid white;
  border-radius: 20px;
  background: black;
  margin: 40px;
  width: 100%;
  box-shadow: 0 0 10px black;
}

.terminal-image {
  border-radius: 30px;
}

.input {
  height: 50px;
  width: 50px;
  box-decoration-break: none;
}
</style>
