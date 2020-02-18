<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
