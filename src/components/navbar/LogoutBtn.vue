<template>
  <div>
    <b-tag type="is-large">{{$route.query.user}}</b-tag>
    <button class="button is-primary" @click="logout">
      Log out
    </button>
  </div>
</template>

<script>
import firebase from '../../firebase'

export default {
  name: 'LogoutBtn',
  methods: {
    logout () {
      firebase.auth().signOut().then(function () {
        this.$router.push('/')
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
