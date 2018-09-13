<template>
    <div id="full">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Login
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
              <b-input placeholder="Enter your email"
                       type="email"
                       v-model="email"
                       icon="email">
              </b-input>
            </b-field>
            <b-field>
              <b-input type="password"
                       placeholder="Enter your password"
                       v-model="password"
                       icon="key"
                       password-reveal>
              </b-input>
            </b-field>
            <a href="#" class="is-info button is-outlined" v-on:click="login">Login</a>
          </div>
        </div>
        <nuxt-link to="/register">Or create an account</nuxt-link>
        <br><br>
      </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
      name: "login",
      data: function () {
        return {
          email: '',
          password: ''
        }
      },
      methods : {
        login: function () {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(
              () => this.$router.replace({ path: '/feed' }),
              function(error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                  alert('The password is too weak.')
                } else {
                  alert(errorMessage)
                }
                console.log(error)
              }
            )
        }
      }
    }
</script>

<style scoped>

</style>
