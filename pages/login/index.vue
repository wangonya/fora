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
                       icon="email">
              </b-input>
            </b-field>
            <b-field>
              <b-input type="password"
                       placeholder="Enter your password"
                       icon="key"
                       password-reveal>
              </b-input>
            </b-field>
            <a href="#" class="is-info button is-outlined">Login</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>
