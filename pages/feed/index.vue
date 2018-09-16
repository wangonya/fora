<template class="columns is-mobile">
    <div id="body">
      <div class="box column is-8 is-offset-2" v-for="(post, index) in posts" :key='index' v-on:click="openPost">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <h2>
                <strong>{{post.data.title}}</strong>
              </h2>
              <p>{{post.data.description}}</p>
              <p><span class="level-left"><small>@{{post.data.userName}} </small></span></p>
              <p><span class="level-left"><small>{{post.data.tags}} </small></span></p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <div class="level-item">
              <span>
                <b-icon
                  icon="heart-outline"
                  type="is-danger"
                ></b-icon> <sup>32</sup>
              </span>
                </div>
                <div class="level-item">
              <span>
                <b-icon
                  icon="comment-text-outline"
                  type="is-danger"
                ></b-icon> <sup>13</sup>
              </span>
                </div>
              </div>
            </nav>
          </div>
        </article>
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
        const ref = StoreDB.collection('feed')

        let snap = []
        try {
          await ref.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              snap.push({id: doc.id, data:doc.data()})
            })
          })
        }
        catch (e) {
          // TODO: error handling
          console.error(e)
        }

        return {
          posts: snap
        }
      },
      methods: {
        openPost () {
          console.log('you just clicked post')
        }
      }
    }
</script>

<style scoped>

</style>
