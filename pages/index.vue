<template>
  <section id="welcome">
    <div>
      <app-logo/>
      <h1 class="title">
        fora
      </h1>
      <div class="links buttons is-centered">
        <nuxt-link
          to="#"
          class="button is-info is-outlined">Enter</nuxt-link>
        <nuxt-link
          to="/about"
          class="button is-outlined">Learn More</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
#welcome {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>

