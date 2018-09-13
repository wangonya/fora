<template>
    <div>
      <div>profile here</div>
      <br><br>
      <div class="button is-danger" v-on:click="signOut">Sign Out</div>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
          signOut() {
            this.$store.dispatch('signOut')
              .then(() => this.$router.replace({ path: '/' }))
          }
        }
    }
</script>

<style scoped>

</style>
