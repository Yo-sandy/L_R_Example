<template>
<div>
  <div class="my-2">
    <nuxt-link class="btn btn-primary" :to="{name:'admin-category-create'}">Add New Category</nuxt-link>
  </div>
 <client-only>
   <table class="table table-hover">
     <tr>
       <th>Category ID</th>
       <th>Category Name</th>
       <th>Category Slug</th>
       <th>Action</th>
     </tr>
     <tr v-for="category in $store.state.category.categories" :key="category.id">
       <td>{{ category.id }}</td>
       <td>{{ category.name }}</td>
       <td>{{ category.slug }}</td>
       <td>
         <nuxt-link class="btn btn-success btn-sm text-dark" :to="{name:'admin-category-single', params:{id:category.id}}">View</nuxt-link>
         <nuxt-link class="btn btn-warning btn-sm" :to="{name:'admin-category-edit', params:{id:category.id}}">Edit</nuxt-link>
         <button class="btn btn-danger btn-sm text-dark" @click="$store.dispatch('category/deleteSingleCategory',category.id)">Delete</button>
       </td>
     </tr>
   </table>
 </client-only>
</div>
</template>

<script>
export default {
  name: "index",
  layout:"admin",
}
</script>
