<template>
    <div>
      <div>
        <p>{{text}}</p>
      </div>
    </div>
</template>

<script>
  import { StoreDB } from '@/services/fireinit.js'

  export default {
        name: "index",
        data() {
          return {
            text: ""
          }
        },
      async asyncData({app, params, error}) {
        const ref = StoreDB.collection("test").doc("test")

        let snap
        try {
          snap = await ref.get()
        } catch (e) {
          // TODO: error handling
          console.error(e)
        }
        return {
          text: snap.data().text
        }
      },
      methods: {

      }
    }
</script>

<style scoped>

</style>
