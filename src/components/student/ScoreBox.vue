<template>
  <section>
    <b-field label="score">
      <b-input v-model="score"></b-input>
    </b-field>
  </section>
</template>

<script>
export default {
  name: 'ScoreBox',
  data () {
    return {
      score: 90
    }
  }
}
</script>

<style scoped>

</style>
