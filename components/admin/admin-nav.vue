<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">{{ project_name }}</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
    <div class="me-0">
        <button class="btn btn-outline-danger" @click="logout">Logout</button>
      </div>
  </header>
</template>

<script>
export default {
  name: "admin-nav",
  computed:{
    project_name(){
      return process.env.PROJECT_NAME
    }
  },
  methods:{
    async logout(){
      try{
        this.$toast.success('Successfully Logout')
        await this.$auth.logout();
      }catch (e){
        this.$toast.error('Unable to Logout')
      }
    }
  }
}
</script>

<style scoped>

</style>
