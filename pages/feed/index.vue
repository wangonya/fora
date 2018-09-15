<template>
    <div id="body">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div class="content">
            {{posts.text}} <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
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
