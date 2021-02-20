<template>
  <div>
    <div class="col-md-6" >
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" v-model="product.name"/>
    </div>
    <div class="col-md-6">
      <label for="desc" class="form-label">Desc</label>
      <input type="text" class="form-control" id="desc" v-model="product.desc"/>
    </div>
    <div class="col-md-6">
      <label for="number" class="form-label">Price</label>
      <input type="number" class="form-control" id="number" v-model="product.price"/>
    </div>
    <div class="col-md-6">
      <label for="stock" class="form-label">Stock</label>
      <input type="number" class="form-control" id="stock" v-model="product.stock"/>
    </div>
    <div class="col-md-6">
      <label for="category" class="form-label">Category</label>
       <select class="form-select" id="category" v-model="product.category_id">
         <option
           v-for="category in $store.state.category.categories"
           :value="category.id"
           :key="category.id"
           >{{ category.name}}
         </option>
       </select>
    </div>
    <div class="mt-2">
      <button
        class="btn btn-outline-primary"
        @click="$store.dispatch('product/update', product.id)"
      >Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Edit",
  layout: "admin",
  computed:{
    product() {
      return this.$store.getters['product/getProductById'](this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>
