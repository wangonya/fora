<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Register
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        <b-field>
          <b-input placeholder="Username"
                   required
                   type="text"
                   v-model="username"
                   icon="account">
          </b-input>
        </b-field>
        <b-field>
          <b-input placeholder="Enter your email"
                   type="email"
                   required
                   v-model="email"
                   icon="email">
          </b-input>
        </b-field>
        <b-field>
          <b-input type="password"
                   placeholder="Enter your password"
                   icon="key"
                   required
                   v-model="password"
                   password-reveal>
          </b-input>
        </b-field>
        <a href="#" class="is-info button is-outlined is-rounded" v-on:click="register">Register</a>
      </div>
    </div>
    <nuxt-link to="/login">Go back to login</nuxt-link>
    <br><br>
  </div>
</template>

<script>
  import { StoreDB } from '@/services/fireinit.js'
  import firebase from 'firebase'
  export default {
        name: "RegisterForm",
        data: function () {
          return {
            username: '',
            email: '',
            password: '',
            loadingComponent: ''
          }
        },
        methods : {
          register: function () {
            this.loadingComponent = this.$loading.open()
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
              .then(data => {
                this.createUser(data)
              }).catch(err => console.log(err))
              .then(
                () => this.$router.replace({ path: '/feed' })
              )
              .catch(function(error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                  alert('The password is too weak.')
                } else {
                  alert(errorMessage)
                }
                console.log(error)
              })
              .then(() => this.loadingComponent.close())
          },
          createUser (userObject) {
            console.log('data', userObject)
            const docRef = StoreDB.collection('users')
            const userName = this.username
            const userEmail = userObject.user.email
            docRef
              .doc(userEmail)
              .set({
                id: userObject.user.uid,
                userName
              }).then().catch((err) => console.log(err))
          }
        }
    }
</script>

<style scoped>

</style>
