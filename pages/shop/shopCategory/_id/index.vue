<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4" v-if="products.length > 0">
      <div v-for="product in products">
        <div class="card border-success mb-3" style="max-width: 18rem;">
          <img src="https://i.pinimg.com/236x/2d/77/c3/2d77c396afa27d5363678e04671ce97d--perfect-food-vegetables.jpg" class="card-img-top" width="156" height="156">
          <h5 class="card-header border-success p-0">Product : {{ product.name }}</h5>
          <p class="card-text text-primary m-0">Des : {{product.desc}}</p>
          <p class="card-text m-0">Stock In : {{product.stock}}</p>
          <p class="card-text  m-0">Price : {{product.price}}</p>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Qty</div>
            </div>
            <input type="number" class="form-control" >
          </div>
          <button class="btn btn-sm btn-outline-info">BUY</button>
          <button class="btn btn-sm btn-outline-success">Edit CART</button>
        </div>
      </div>
    </div>
    <div v-else>
      <h4>no item in this category</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: "_id",
    layout:"default",
    computed:{
      products(){
        return this.$store.getters['product/getFilteredProducts'](this.$route.params.id)
      }
    },
    validate({params}){
      return !isNaN(params.id);
    }
  }
</script>

<style scoped>

</style>



