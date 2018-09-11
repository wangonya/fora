<template>
    <div id="navbar">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <img src="icons/icon-64.png" alt="fora logo" height="35">
          </nuxt-link>

          <div class="navbar-burger" @click="makeBurger" data-target="navMenu" v-bind:class="{ 'is-active': activator }">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div class="navbar-menu" id="navMenu" v-bind:class="{ 'is-active': activator }">
          <div class="navbar-end">
            <!-- navbar items -->
            <a class="navbar-item">
              Login
            </a>
            <a class="navbar-item">
              Register
            </a>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
      data () {
        return {
          msg: '',
          activator: false
        }
      },
      methods: {
        makeBurger () {
          this.activator = !this.activator
          return this.activator
        }
      }
    }
</script>

<style scoped>

</style>
