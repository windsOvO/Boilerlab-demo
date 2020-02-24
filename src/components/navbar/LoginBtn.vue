<template>
  <section>
    <button class="button is-light"
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
  }
}
</script>

<style scoped>

</style>
