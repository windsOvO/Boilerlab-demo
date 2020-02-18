<template>
  <div>
    <slot></slot>
    <slot name="label"></slot>
  </div>
</template>

<script>
const props = {
  hoverable: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  },
  right: {
    type: Boolean,
    default: false
  },
  arrowless: {
    type: Boolean,
    default: false
  },
  boxed: {
    type: Boolean,
    default: false
  }
}

export default {
  name: 'NavbarDropdown',
  props: props
}
</script>

<style scoped>

</style>
