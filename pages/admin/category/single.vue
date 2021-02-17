<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h3>{{category.id}} - {{category.name}}</h3>
        <nuxt-link class="btn btn-warning btn-sm" :to="{name:'admin-category-edit', params:{id:category.id}}">Edit</nuxt-link>
        <button class="btn btn-danger btn-sm text-dark" @click="$store.dispatch('category/deleteSingleCategory',category.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "single",
  layout:"admin",
  computed:{
    category(){
      return this.$store.getters['category/getCategoryByID'](this.$route.params.id)
    }
  }
}
</script>
<style >
    table,th,td{
      border: 1px solid black;
    }
</style>
