<template>
    <div id="navbar">
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <img src="/icons/icon-64.png" alt="fora logo" height="45">
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
                       icon="magnify" rounded>
              </b-input>
            </div>
            <nuxt-link to="/feed" class="navbar-item">
              <b-icon
                icon="book">
              </b-icon>
            </nuxt-link>
            <nuxt-link to="/new" class="navbar-item">
              <b-icon
                icon="lead-pencil">
              </b-icon>
            </nuxt-link>
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
            <nuxt-link to="/profile" class="navbar-item">
              <b-icon
                icon="account">
              </b-icon>
            </nuxt-link>
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
