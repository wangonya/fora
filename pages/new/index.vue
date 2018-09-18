<template>
    <div id="body">
      <section class="column is-10 is-offset-1">
        <div>
          <h3 class="title is-3">New Post</h3>
          <p class="subtitle is-5">
            {{userName}}
          </p>
        </div>
        <br><br>
        <button class="button is-success is-rounded is-outlined" v-on:click="writeToFirestore">Publish</button>
        <br><br>
        <div>
          <input type="text" placeholder="Title" minlength="2"
                 maxlength="20" v-model="title" />
        </div>
        <br>
        <div>
          <textarea type="text" placeholder="Add a short description" minlength="10" v-model="description" class="small"/>
        </div>
        <br>
        <div class="block">
          <b-radio v-model="tags"
                   native-value="post"
                   type="is-primary">
            Blog Post
          </b-radio>
          <b-radio v-model="tags"
                   native-value="study"
                   type="is-info">
            Bible Study
          </b-radio>
          <b-radio v-model="tags"
                   native-value="question"
                   type="is-danger">
            Question
          </b-radio>
        </div>
        <br>
        <div>
          <textarea type="text" placeholder="Tell your story" minlength="10" v-model="story"/>
        </div>
        <div class="is-invisible">
          <input v-model="userName" />
        </div>
      </section>
    </div>
</template>

<script>
  import firebase from 'firebase'
  import { StoreDB } from '@/services/fireinit.js'
    export default {
      name: "index",
      data : function () {
        return {
          title: '',
          story: '',
          tags: '',
          description: '',
          userName: ''
        }
      },
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
            userName: snap.data().userName
          }
        }
      },
      methods: {
        async writeToFirestore() {
          const ref = StoreDB.collection('feed')
          const document = {
            title: this.title,
            story: this.story,
            tags: this.tags,
            description: this.description,
            userName: this.userName
          }

          try {
            await ref.add(document)
          } catch (e) {
            // TODO: error handling
            console.error(e)
          }
        }
      }
    }
</script>

<style scoped>
  input[type=text] {
    border: none;
    outline: 0;
    font-size: 23px;
    width: 80vw;
    height: 30px;
  }

  textarea[type=text]:focus {
    border: none;
    outline: 0;
  }

  textarea[type=text] {
    border: none;
    outline: 0;
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
    line-height: 1.58;
    letter-spacing: -.003em;
    width: 80vw;
    height: 100vh;
  }

  .small {
    height: 10vh !important;
  }
</style>
