<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        BoilerLab
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item @click="goHome">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Documentation
      </b-navbar-item>
      <info></info>
      <!--        labs selection dropdown in details-->
      <router-view name="dropdown"></router-view>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <router-view name="btn"></router-view>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import Info from '../components/navbar/Info'

const props = {
  transparent: {
    type: Boolean,
    default: false
  },
  fixedTop: {
    type: Boolean,
    default: false
  },
  fixedBottom: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: false
  },
  type: {
    type: String
  },
  wrapperClass: {
    type: String
  },
  closeOnClick: {
    type: Boolean,
    default: true
  },
  mobileBurger: {
    type: Boolean,
    default: true
  },
  spaced: {
    type: Boolean,
    default: false
  },
  shadow: {
    type: Boolean,
    default: false
  }
}

export default {
  name: 'Navbar',
  props: props,
  components: {
    info: Info
  },
  methods: {
    goHome () {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

</style>
