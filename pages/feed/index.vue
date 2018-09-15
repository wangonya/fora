<template>
    <div>
      <div>
        <p>{{posts.text}}</p>
      </div>
    </div>
</template>

<script>
  import { StoreDB } from '@/services/fireinit.js'

  export default {
        name: 'index',
        data() {
          return {
            posts: ''
          }
        },
      async asyncData({app, params, error}) {
        const ref = StoreDB.collection('test').doc('test')

        let snap
        try {
          snap = await ref.get()
        } catch (e) {
          // TODO: error handling
          console.error(e)
        }
        return {
          posts: snap.data()
        }
      },
      methods: {

      }
    }
</script>

<style scoped>

</style>
