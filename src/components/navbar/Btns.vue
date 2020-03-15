<template>
  <div class="buttons">
    <register-btn></register-btn>
    <login-btn></login-btn>
  </div>
</template>

<script>
import LoginBtn from './LoginBtn'
import RegisterBtn from './RegisterBtn'

export default {
  name: 'Btns',
  components: {
    'login-btn': LoginBtn,
    'register-btn': RegisterBtn
  }
}
</script>

<style scoped>

</style>
