<template>
  <section id="full">
    <div>
      <app-logo/>
      <h1 class="title">
        fora
      </h1>
      <div class="links buttons is-centered">
        <nuxt-link
          to="/feed"
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

</style>

