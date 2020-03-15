<template>
  <div>
    <b-tag type="is-large">{{$store.state.userInfo.name}}</b-tag>
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
      // 不能用function(), 会导致this === null
      firebase.auth().signOut().then(() => {
        this.$router.push('/')
        this.$store.commit('clearUserInfo')
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
