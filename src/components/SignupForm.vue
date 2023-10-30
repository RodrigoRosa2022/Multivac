<template>
      <form @submit.prevent="checkForm">
        <label>Certified Multivac Navigator</label>
        <input type="text" required placeholder="User Name" v-model="navigator">
        
        <label>Password</label>
        <input type="password" required v-model="password" placeholder="Password">

        <div class="terms">
          <input type="checkbox" v-model="terms" required>
          <label>Endorse Quantum Era Covenants</label>

        </div>

        <div v-if="!submitted"> 
          <button type="submit">Require Access</button>
        </div>
        <div v-if="passwordApproved" class="enterButton">
<router-link :to="this.navigator">
  <button class="approvedButton">Enter Multivac Room</button>
</router-link>
        </div>

        <div v-if="loading" class="loading">           
          <LoadingSymbol />
        </div>
        
        <div v-if="loading || passwordApproved">
          <p>*Remember, keep it classy when you talk to The Multivac; it appreciates your elegance. </p>
        </div>

        <div v-if="passwordDennied">
          <p>You are not allowed to interact with Multivac.</p>
        </div>

      </form>
  
</template>

<script>
import LoadingSymbol from './LoadingSymbol.vue';
export default {
  components: { LoadingSymbol },
  data() {
    return {
      password: '',
      navigator: '',
      terms: false,
      passwordApproved: false,
      submitted: false,
      loading: false,
      passwordDennied: false
    };
  },
  methods: {
    checkForm() {
      console.log("navigator:", this.navigator)
      console.log("password:", this.password)
      console.log("terms:", this.terms)
      this.submitted = true
      this.loading = true
      this.passwordDennied= false



       if (this.password.startsWith("kk")) {
        setTimeout(() => {
          this.passwordApproved = true
          console.log("Password starts with 'kk'. Proceed with form submission.")
          this.loading = false
        }, 2000); 
      } else {
          setTimeout(() => {
            this.submitted = false
            console.log("Password does not start with 'kk'.")
            this.loading = false
            this.passwordDennied = true
          }, 2000)
        }

    }
  }
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

.loading {
    display: flex;
  align-items: center;
  justify-content: center;
}

.enterButton {
  display: flex;
  align-items: center;
  justify-content: center;
}

.approvedButton {
  font-size: 30px;
  background-color: black;
  color: #F8F48A;
}

</style>