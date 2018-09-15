<template class="columns is-mobile">
    <div id="body">
      <div class="box column is-8 is-offset-2">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <h2>
                <strong>{{post.title}}</strong>
              </h2>
              <p>{{post.story}}</p>
              <p><span class="level-left"><small>@johnsmith </small></span></p>
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
          post: ''
        }
      },
      async asyncData({app, params, error}) {
        const ref = StoreDB.collection('feed').doc('posts')

        let snap
        try {
          snap = await ref.get()
        } catch (e) {
          // TODO: error handling
          console.error(e)
        }
        return {
          post: snap.data()
        }
      }
    }
</script>

<style scoped>

</style>
