<template>
  <div class="backdrop" @click.self="closeModal">

    <div class="modal" v-if="!submited">      
      <SignupForm />
    </div>

  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'

export default {
  props: [],
  data() {
    return {
      submited: false,
      user: '',
      password: '',
      terms: false
    }
  },
  components: {SignupForm},
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>


<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 40px;

}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(34, 34, 34, 0.8);
  width: 100%;
  height: 100%;
}

p {
  color: black;
  border: none;
  padding: 0;
  font-style: normal;
}


</style>