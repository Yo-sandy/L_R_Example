export const state = ()=> ({
  categories: []
})


export const getters = {
  getCategoryByID :(state) => (category_id) =>{
    return state.categories.filter(category => category.id === category_id)[0]
  }
}


export const mutations = {
    SET_CATEGORIES(state, categories){
      state.categories = categories;
    }
  }

  export const actions = {
    async getCategories({commit }) {
      const data = await this.$axios.$get('category');
      commit("SET_CATEGORIES", data)
    },
    async deleteSingleCategory({dispatch},id) {
      const url = `category/${id}`;
      try {
        await this.$axios.delete(url);
        this.$toast.success("Category delete")
        dispatch('getCategories')
        await this.$router.push("/admin/category");
      } catch (e) {
        this.$toast.error("unable to delete ")
      }
    },
    async update({getters, dispatch}, id) {
      const category = getters.getCategoryByID(id);
      try {
        this.$toast.show('Edit New Item')
        await this.$axios.$put('category/' + id, category)
        dispatch('getCategories')
        this.$toast.success('Edit success')
        await this.$router.push('/admin/category')
      } catch (e) {
        this.$toast.error('Not Edit')
      }
    },
    async save({dispatch}, category){
      try {
        this.$toast.show('Add New Item')
        await this.$axios.post('category', category)
        dispatch('getCategories');
        await this.$router.push('/admin/category')
        this.$toast.success('add success')
      }catch (e) {
        this.$toast.error('Not Save')
      }
    }

}

