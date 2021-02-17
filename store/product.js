
export const state = ()=> ({
  products: []
})

export const getters = {
  getProductById :(state) => (product_id) =>{
    return state.products.filter(product => product.id === product_id)[0]
  }
}


export const mutations = {
  SET_PRODUCTS(state, products){
    state.products = products
  }
}

export const actions = {
  async getProducts({commit}) {
    const data = await this.$axios.$get('product')
    commit("SET_PRODUCTS",data)
  },async deleteSingleProduct({dispatch},id) {
    const url = `product/${id}`;
    try {
      await this.$axios.delete(url);
      this.$toast.success("Product delete")
      dispatch('getProducts')
      await this.$router.push("/admin/products")
    } catch (e) {
      this.$toast.error("unable to delete ")
    }
  },
  async update({getters, dispatch}, id){
    const product = getters.getProductById(id);
    try{
      this.$toast.show('Edit New Product')
      await this.$axios.$put('product/' +id, product)
      dispatch('getProducts');
      await this.$router.push('/admin/products')
      this.$toast.success('add success')
    }catch (e){
      this.$toast.error('Not Edit')
    }
  },
  async save({dispatch}, product){
    try {
      this.$toast.show('Add New product')
      await this.$axios.post('product', product)
      dispatch('getProducts');
      await this.$router.push('/admin/products')
      this.$toast.success('add success')
    }catch (e) {
      this.$toast.error('Not Save')
    }
  }
}


