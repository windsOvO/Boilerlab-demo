<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Login</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Email">
          <b-input
            type="email"
            :value="email"
            placeholder="Your email"
            required>
          </b-input>
        </b-field>

        <b-field label="Password">
          <b-input
            type="password"
            :value="password"
            password-reveal
            placeholder="Your password"
            required>
          </b-input>
        </b-field>

        <b-checkbox>Remember me</b-checkbox>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Close</button>
        <button class="button is-primary" @click="login">Login</button>
      </footer>
    </div>
  </form>
</template>
<!--use modal form-->
<script>
import firebase from '../../firebase'

export default {
  name: 'LoginForm',
  data () {
    return {
      email: '2315543036@qq.com',
      password: '20001020cl'
    }
  },
  methods: {
    login () {
      console.log('231')

      setTimeout(function () {
        console.log('231')
      }, 1000)
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(res => {
          // const user = firebase.auth().currentUser
          // const user = { displayName: 'Lang' }
          console.log(res.user)
          // if (res) {
          //   this.$router.push({
          //     path: '/login',
          //     query: { user: res.displayName }
          //   })
          // }
        })
        .catch(function (error) {
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
