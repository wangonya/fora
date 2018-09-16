<template class="columns is-mobile">
  <section class="column is-10 is-offset-1">
    <button class="button is-success" v-on:click="writeToFirestore">Publish</button>
    <br><br>
    <div>
      <input type="text" placeholder="Title" minlength="2"
             maxlength="20" v-model="title"/>
    </div>
    <br>
    <div>
      <textarea type="text" placeholder="Tell your story" minlength="10"
                maxlength="1000" v-model="story"/>
    </div>
  </section>
</template>

<script>
  import { StoreDB } from '@/services/fireinit.js'

  export default {
      name: "PostForm",
      data : function () {
        return {
          title: '',
          story: ''
        }
      },
      methods: {
        async writeToFirestore() {
          const ref = StoreDB.collection('feed')
          const document = {
            title: this.title,
            story: this.story
          }

          try {
            await ref.add(document)
          } catch (e) {
            // TODO: error handling
            console.error(e)
          }
        },
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

  input[type=text]:focus {
    border: none;
    outline: 0;
    width: 300px;
    height: 30px;
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
</style>
