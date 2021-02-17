export const actions = {
  async nuxtServerInit({dispatch, rootState}){
   if(rootState.auth.loggedIn){
     await dispatch('category/getCategories')
     await dispatch('product/getProducts')
   }
  }
}
