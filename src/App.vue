<template>
  <div id="app">
    <main-navbar></main-navbar>
    <section class="hero is-link is-fullheight-with-navbar is-bold is-primary">
      <div class="hero-body">
        <div class="container is-fluid">
          <stu-board></stu-board>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar'
import StuBoard from './components/mainview/StuBoard'

export default {
  name: 'App',
  components: {
    'main-navbar': Navbar,
    'stu-board': StuBoard
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
