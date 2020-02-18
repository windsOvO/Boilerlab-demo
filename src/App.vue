<template>
  <div id="app">
    <template>
      <b-navbar>
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <h2>BoilerLab</h2>
          </b-navbar-item>
        </template>
        <template slot="start">
          <b-navbar-item href="#">
            Home
          </b-navbar-item>
          <b-navbar-item href="#">
            Documentation
          </b-navbar-item>
          <b-navbar-dropdown label="Info">
            <b-navbar-item href="#">
              About
            </b-navbar-item>
            <b-navbar-item href="#">
              Contact
            </b-navbar-item>
          </b-navbar-dropdown>
        </template>

        <template slot="end">
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <b-login-btn></b-login-btn>
<!--              <router-link tag="a" class="button is-light" to="login">-->
<!--                Log in-->
<!--              </router-link>-->
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </template>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/index.scss";
</style>
