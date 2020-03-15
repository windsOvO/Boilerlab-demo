<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Name:{{name}}
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
      </a>
    </header>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
        </div>
        <div class="content">
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a @click="visitDetails" class="card-footer-item">Details</a>
      <a href="#" class="card-footer-item">Complete</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'StuCard',
  props: {
    name: String
  },
  data () {
    return {
      step: 0
    }
  },
  methods: {
    visitDetails () {
      this.$router.push({
        path: '/details',
        query: { name: this.name }
      })
    }
  }
}
</script>

<style scoped>

</style>
