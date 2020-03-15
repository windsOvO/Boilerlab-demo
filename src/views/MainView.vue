<template>
    <section class="hero is-link is-fullheight-with-navbar is-bold is-primary">
      <div class="hero-body">
        <div class="container is-fluid">
          <stu-board></stu-board>
        </div>
      </div>
    </section>
</template>

<script>
import StuBoard from '../components/student/StuBoard'

export default {
  name: 'MainView',
  components: {
    'stu-board': StuBoard
  }
}
</script>

<style scoped>

</style>
