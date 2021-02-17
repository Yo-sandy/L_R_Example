<template>
        <div class="row">
          <div class="my-2">
            <nuxt-link class="btn btn-primary" :to="{name:'admin-products-create'}">Add New Product</nuxt-link>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div  v-for="product in $store.state.product.products" :key="product.id">
                <div class="card border-success mb-3" style="max-width: 18rem;">
                    <h5 class="card-header border-success">Product : {{ product.name }}</h5>
                    <p class="card-text text-primary">Des : {{product.desc}}</p>
                    <p class="card-text">Product Id: {{product.id}}</p>
                    <p class="card-text">Product Stock In : {{product.stock}}</p>
                    <p class="card-text">Product Price : {{product.price}}</p>
                    <p class="card-text">Category : {{product.category.name}}</p>
                    <nuxt-link class="btn btn-sm btn-outline-primary" :to="{name:'admin-products-single', params:{id:product.id}}">View</nuxt-link>
                    <nuxt-link class="btn btn-sm btn-outline-warning" :to="{name:'admin-products-edit', params:{id:product.id}}">Edit</nuxt-link>
                    <button class="btn btn-sm btn-outline-danger" @click="$store.dispatch('product/deleteSingleProduct',product.id)">Delete</button>
                  </div>
                </div>
              </div >
            </div>
</template>

<script>
  export default {
    name: "index",
    layout:"admin",
  }
</script>

<style scoped>

</style>
