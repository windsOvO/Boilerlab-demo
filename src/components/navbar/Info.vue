<template>
  <b-dropdown aria-role="menu">
    <a
      class="navbar-item"
      slot="trigger"
      role="button">
      <span>Info</span>
      <b-icon pack="fas"
              icon="angle-down"
              type="is-primary"></b-icon>
    </a>
    <b-dropdown-item aria-role="menuitem">
      About
    </b-dropdown-item>
    <b-dropdown-item aria-role="menuitem">
      contact
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: 'Info'
}
</script>

<style scoped>

</style>
