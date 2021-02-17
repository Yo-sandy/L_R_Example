<template>
  <div>
    <div class="col-md-6">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" v-model="category.name"/>
    </div>
    <div class="mt-2">
      <button class="btn btn-outline-primary" @click="$store.dispatch('category/update', category.id)">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Edit",
  layout: "admin",
  computed:{
    category(){
      return this.$store.getters['category/getCategoryByID'](this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>
