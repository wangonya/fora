<template>
    <div id="body">
      <div>{{user.userName}}</div>
      <br><br>
      <div class="button is-danger is-rounded is-outlined" v-on:click="signOut">Sign Out</div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    import { StoreDB } from '@/services/fireinit.js'

    export default {
        name: "index",
        async asyncData({app, params, error}) {
          const user = firebase.auth().currentUser
          if (user != null) {
            let userEmail = user.email
            const ref = StoreDB.collection('users').doc(userEmail)

            let snap
            try {
              snap = await ref.get()
            } catch (e) {
              // TODO: error handling
              console.error(e)
            }
            return {
              user: snap.data()
            }
          }
        },
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
