<template>
  <section>
    <button class="button is-primary is-medium"
            @click="isComponentModalActive = true">
      Log in
    </button>

    <b-modal :active.sync="isComponentModalActive"
             has-modal-card
             trap-focus
             aria-role="dialog"
             aria-modal>
      <login-modal v-bind="formProps"></login-modal>
    </b-modal>
  </section>
</template>

<script>
import LoginForm from './LoginForm'
import firebase from '../firebase.js'

export default {
  name: 'LoginBtn',
  components: {
    'login-modal': LoginForm
  },
  data () {
    return {
      isComponentModalActive: false,
      formProps: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
    }
  }
}
</script>

<style scoped>

</style>
