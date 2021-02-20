<template>
        <div class="container">
          <div class="row row-cols-1 row-cols-md-3 g-4 text-start mt-3">
            <div v-for="(category, $index) in $store.state.category.categories" :key="category.id">
              <div class="card border-success mb-3" style="max-width: 18rem;">
                <img src="https://i.pinimg.com/236x/2d/77/c3/2d77c396afa27d5363678e04671ce97d--perfect-food-vegetables.jpg"
                     class="card-img-top"
                     width="156"
                     height="156"
                />
                <nuxt-link
                  class="btn btn-sm btn-outline-success"
                  :to="{name:'shop-shopCategory-id', params:{id:category.id}}">{{ category.name }}</nuxt-link>
              </div>
              <button
                class="btn btn-outline-dark form-control mb-1"
                @click="updateShow($index)"
                style="max-width: 18rem"> CHECK LIST</button>

              <div v-show="isShown[$index]">
                <div v-for="(product, index) in $store.getters['product/getFilteredProducts'](category.id)" :key="index">
                  <div class="card border-success mb-3" style="max-width: 18rem;">
                    <img src="https://www.pngkit.com/png/detail/5-57847_free-png-apple-fruit-png-images-transparent-apple.png"
                         class="card-img-top" width="156" height="156">
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
                    <button class="btn btn-sm btn-outline-success">EDIT CART</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      show:false,
    }
  },
  computed:{
    isShown(){
      let arr = [];
      this.$store.state.category.categories.forEach(cat =>{arr.push(false)})
      return arr;
    }
  },
  methods:{
      updateShow(index){
        this.$set(this.isShown, index, !this.isShown[index])
        this.$forceUpdate();
      }
  }
}
</script>

<style scoped>

</style>
