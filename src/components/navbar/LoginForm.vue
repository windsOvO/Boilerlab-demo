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
        <b-button class="button" type="button" @click="$parent.close()">Close</b-button>
        <b-button class="button is-primary" @click="login">Login</b-button>
      </footer>
<!--      button改为b-button解决click无法setTimeout的问题-->
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
      email: 'windszzlang@gmail.com',
      // email: 'ta3@boilerlab.com',
      password: '123456'
    }
  },
  methods: {
    // get name and other info through email from firestore
    getUserInfo (email) {
      return new Promise(resolve => {
        const db = firebase.firestore()
        db.collection('users').where('email', '==', email)
          .get()
          .then(query => {
            query.forEach(doc => {
              resolve({
                name: doc.data().name,
                section: doc.data().section
              })
            })
          })
          .catch(err => console.log('Error getting documents:', err))
      })
    },
    // login and authorization with firebase
    async login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(res => {
          this.getUserInfo(res.user.email)
            .then(info => {
              // console.log(info)
              const userInfo = {
                email: res.user.email,
                name: info.name,
                section: info.section
              }
              console.log(userInfo)
              this.$store.commit('setUserInfo', userInfo)
              this.$router.push({
                path: '/home'
                // query: {
                //   user: info.name,
                //   section: info.section
                // }
              })
            })
        })
        .catch(error => {
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
