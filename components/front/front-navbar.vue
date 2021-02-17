<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <nuxt-link class="navbar-brand" to="/">Revision</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link class="nav-link active" to="/">Home</nuxt-link>
          </li>
        </ul>
        <div class="me-0">
            <div v-if="!$auth.loggedIn">
                <nuxt-link class="btn btn-outline-primary" to="/login">Login</nuxt-link>
                <nuxt-link class="btn btn-outline-success" to="/register">Register</nuxt-link>
            </div>
            <div v-else>
                <nuxt-link to="/profile">{{$auth.user ? $auth.user.name: ""}}</nuxt-link>
                <button class="btn btn-outline-danger" @click="$auth.logout">Logout</button>
            </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "navbar",
    head: {
      title: process.env.PROJECT_NAME,
    },
  }
</script>
