<template>
    <div>
      <div>profile here</div>
      <br><br>
      <div class="button is-danger" v-on:click="signOut">Sign Out</div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "index",
        methods: {
          signOut() {
            firebase.auth().signOut().then(function() {
              console.log('Signed Out')
            }, function(error) {
              console.error('Sign Out Error', error)
            })
          }
        }
    }
</script>

<style scoped>

</style>
