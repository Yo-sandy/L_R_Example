<template>
<div>
  <admin-nav />

  <div class="container-fluid">
    <div class="row">
      <admin-sidebar />

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <Nuxt />
      </main>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "admin",
  middleware:"auth",
  head(){
    return{
      title:"Admin Area",
      link: [
        { rel: 'stylesheet', href: '/admin/css/dashboard.css' }
      ],
      script: [
        { src: '/admin/js/dashboard.js'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
