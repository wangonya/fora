<template class="columns is-mobile">
    <div id="body">
      <div class="box column is-8 is-offset-2" v-for="(post, index) in posts" :key='index' v-on:click="openPost(post.id)">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <h2>
                <strong>{{post.title}}</strong>
              </h2>
              <p>{{post.description}}</p>
              <nav class="level is-mobile">
              <div class="level-left"><span class="level-item"><small>@{{post.userName}} </small></span></div>
              <div class="level-right"><span class="level-item"><small>
                <b-tag rounded class="is-danger" v-if="post.tags === 'question'">{{post.tags}}</b-tag>
                <b-tag rounded class="is-info" v-if="post.tags === 'study'">{{post.tags}}</b-tag>
                <b-tag rounded class="is-primary" v-if="post.tags === 'blog'">{{post.tags}}</b-tag>
              </small></span></div>
              </nav>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <div class="level-item is-link">
              <span>
                <b-icon
                  icon="comment-text-outline"
                ></b-icon> <sup><vue-disqus-count :identifier="disqusId+post.id"/></sup>
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
          posts: '',
          checkTag: {
            'is-danger': true
          }
        }
      },
      async asyncData({app, params, error}) {
        const ref = StoreDB.collection('feed')

        let snap = []
        try {
          await ref.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              snap.push({
                id: doc.id,
                title: doc.data().title,
                userName: doc.data().userName,
                description: doc.data().description,
                tags: doc.data().tags
              })
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
        openPost: function (id) {
          this.$router.push(`/feed/${id}`)
        }
      },
      computed: {
        disqusShortname () {
          return 'fora-1'
        },
        disqusId () { // env used to avoid re-use from dev to production
          return `${process.env.NODE_ENV}-${this.disqusShortname}-`
        }
      }
    }
</script>

<style scoped>

</style>
