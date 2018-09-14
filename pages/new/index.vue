<template>
    <div>
      new post here
      <div>
        <button @click="write">
          <span v-if="write">Write now</span>
          <span v-else>Successful!</span>
        </button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
          write() {
            this.$store.dispatch('writeToFirestore')
          }
        }
    }
</script>

<style scoped>

</style>
