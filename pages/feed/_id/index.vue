<template >
    <div class="content column is-8 is-offset-2" id="body">
      <div v-for="(field, index) in post" :key='index'>
        <h1 class="has-text-centered" >{{field.title}}</h1>
        <div class="has-text-centered">
          <small><b-icon
            icon="account"
            size="is-small">
          </b-icon>{{field.userName}}</small>
          <br>
          <small><b-icon
            icon="tag-multiple"
            size="is-small">
          </b-icon><b-tag rounded>{{field.tags}}</b-tag></small>
        </div>
        <br><br>
        <div class="has-text-justified">
          <div v-html="$md.render(field.story)"></div>
        </div>
      </div>
    </div>
</template>

<script>
    import { StoreDB } from '@/services/fireinit.js'
    export default {
        name: "index",
        data() {
          return {
            post: ''
          }
        },
        async asyncData(context) {
          const ref = StoreDB.collection('feed').doc(context.route.params.id)
          let data = []
          await ref.get().then(function(doc) {
            if (doc.exists) {
              data.push(doc.data())
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!")
            }
          }).catch(function(error) {
            console.log("Error getting document:", error)
          })
            return{
              post: data
            }
        },
    }
</script>

<style scoped>

</style>
