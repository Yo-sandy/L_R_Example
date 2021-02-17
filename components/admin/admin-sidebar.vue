<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <nuxt-link class="nav-link active" aria-current="page" :to="{name:'admin'}">
            <span data-feather="home"></span>
            Dashboard
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" :to="{name:'admin-category'}">
            <span data-feather="file"></span>
            Category
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" :to="{name:'admin-products'}">
            <span data-feather="file"></span>
            Products
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "admin-sidebar"
}
</script>

<style scoped>

</style>
