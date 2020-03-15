<template>
  <div id="app">
    <bl-navbar></bl-navbar>
    <router-view name="main"></router-view>
  </div>
</template>

<script>
import Navbar from './views/Navbar'

export default {
  name: 'App',
  components: {
    'bl-navbar': Navbar
  },
  data () {
    return {
    }
  }
}

</script>

<style lang="scss">
@import "./assets/styles/index.scss";
</style>
