<template>
      <form action="play">
        <label>Certified Multivac Navigator</label>
        <input type="text" required placeholder="User Name">
        
        <label>Password</label>
        <input type="password" required v-model="password" placeholder="Password">

        <div class="terms">
          <input type="checkbox" v-model="terms" required>
          <label>Accept terms and conditions</label>

        </div>
        <button type="submit">Require Access</button>
        
        <p>*Remember, keep it classy when you talk to The Multivac; it appreciates your elegance. </p>

      </form>
  
</template>

<script>
export default {  
  
  name: 'SignupForm',

}
</script>


<style>
form {
  max-width: 420px;
  margin: 30px auto;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border:none;
  border: 1px solid #ddd;
  color: #555;
}

input[type="Checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}


button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin: 20px 0px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}

p {
  color: black;
}


</style>