<template>
  <div>
    <slot name="brand"></slot>
    <slot name="burger" isOpened="Boolean" toggleActive="Function"></slot>
    <slot name="start"></slot>
    <slot name="end"></slot>
  </div>
</template>

<script>
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
  props: props
}
</script>

<style scoped>

</style>
