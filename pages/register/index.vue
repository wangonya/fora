<template>
    <div id="full">
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
            <a href="#" class="is-info button is-outlined" v-on:click="register">Register</a>
          </div>
        </div>
        <nuxt-link to="/login">Go back to login</nuxt-link>
        <br><br>
      </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "register",
        data: function () {
          return {
            email: '',
            password: ''
          }
        },
        methods : {
          register: function () {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
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
          }
        }
    }
</script>

<style scoped>

</style>
