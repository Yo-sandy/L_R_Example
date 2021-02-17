<template>
  <div>
    <div class="row">
      <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="card border-success mb-3 px-0" style="width: 18rem;">
              <h5 class=" card-header border-success">Product : {{ product.name }}</h5>
              <p class="card-text text-primary">Des : {{product.desc}}</p>
              <p class="card-text">Product Id: {{product.id}}</p>
              <p class="card-text">Product Stock In : {{product.stock}}</p>
              <p class="card-text">Product Price : {{product.price}}</p>
              <p class="card-text">Category : {{product.category ? product.category.name :"unknown"}}</p>
              <nuxt-link  class="btn btn-sm btn-outline-warning" :to="{name:'admin-products-edit', params:{id:product.id}}">Edit</nuxt-link>
              <button  class="btn btn-sm btn-outline-danger"  @click="$store.dispatch('product/deleteSingleProduct',product.id)">Delete</button>
            </div>
          </div>
        </div>
      </div>

</template>

<script>
  export default {
    name: "single",
    layout: "admin",
    computed: {
      product(){
        return this.$store.getters['product/getProductById'](this.$route.params.id)
      }
    }
  }
</script>

<style scoped>

</style>
