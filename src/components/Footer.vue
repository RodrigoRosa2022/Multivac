<template>
<div class="footerContainer">
  <div class="fakeBorder"></div>
  <p class="footer">Coded with sweat, blood and tears.<br>Original webpage by Rodrigo Rosa</p>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
  p.footer {
    color: white;
    margin: 3px 2px;
  }

  div.footerContainer {
    /* border-top: 1px #F8F48A solid;     */
    margin-top: 40px;
  }

  .fakeBorder {
    height: 1px;
    background-image: linear-gradient(to right, #F8F48A, #03051C, #F8F48A);
  }
</style>


