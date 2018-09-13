<template>
    <div id="navbar">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <img src="icons/icon-64.png" alt="fora logo" height="45">
          </nuxt-link>

          <div class="navbar-burger" @click="makeBurger" data-target="navMenu" v-bind:class="{ 'is-active': activator }">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div class="navbar-menu" id="navMenu" v-bind:class="{ 'is-active': activator }">
          <div class="navbar-end">
            <div class="navbar-item">
              <b-input placeholder="Search..."
                       size="is-small"
                       icon="magnify">
              </b-input>
            </div>
            <nuxt-link to="/connect" class="navbar-item">
              <b-icon
                icon="send">
              </b-icon>
            </nuxt-link>
            <nuxt-link to="/notifications" class="navbar-item">
              <b-icon
                icon="bell">
              </b-icon>
            </nuxt-link>
            <div class="navbar-item has-dropdown is-hoverable">
              <span class="navbar-link">
                <b-icon
                  icon="account">
                </b-icon>
              </span>
              <div class="navbar-dropdown is-boxed">
                <!-- navbar items -->
                <nuxt-link class="navbar-item" to="/login">
                  Login
                </nuxt-link>
                <nuxt-link class="navbar-item" to="/register">
                  Register
                </nuxt-link>
                <nuxt-link class="navbar-item" to="/profile">
                  Profile
                </nuxt-link>
              </div>
            </div>
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
