export const actions = {
  async nuxtServerInit({dispatch, rootState}){
     await dispatch('category/getCategories')
     await dispatch('product/getProducts')
  }
}
