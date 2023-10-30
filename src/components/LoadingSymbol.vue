<template>
  <div class="retro-spinwheel-loader">
    <div class="spinwheel">
      <div class="square"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RetroSpinwheelLoader",
};
</script>

<style scoped>
.retro-spinwheel-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.spinwheel {
  width: 80px;
  height: 80px;
  border: 8px solid transparent;
  border-top: 8px solid #F8F48A; /* Light color for the spinning wheel */
  border-bottom: 8px solid #03051C; /* Dark color for the spinning wheel edges */
  border-radius: 50%;
  animation: spin 2s linear infinite;
  position: relative;
  transform: rotate(90deg);
}

.square {
  width: 30px;
  height: 30px;
  background-color: #F8F48A; /* Light color for the square */
  border: 1px solid #03051C; /* Dark color for square edges */
  position: absolute;
  top: 25px;
  left: 25px;
  animation: spinSquare 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinSquare {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
