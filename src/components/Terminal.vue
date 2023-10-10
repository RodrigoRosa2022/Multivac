<template>
<div class="screen">
  <img src="@/assets/terminalzoom.jpg" alt="Screen Frame" width="400" class="terminal-image">
  <p>teste</p>
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
}
</style>
