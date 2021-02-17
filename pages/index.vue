<template>
  <div class="container text-center">
        <div class="row">
            <h2>Revision 3</h2>
            <div class="col-md-6 offset-md-3">
                <div class="mb-2">
                  <nuxt-link to="/register" class="btn btn-outline-success form-control mb-2">Register</nuxt-link>
                  <nuxt-link to="/login" class="btn btn-outline-primary form-control">Login</nuxt-link>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name:"index",
  layout:"default",
  head:{
    title: process.env.PROJECT_NAME,
  }
}
</script>
