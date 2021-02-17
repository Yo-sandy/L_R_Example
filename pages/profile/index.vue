<template>
        <div class="container mt-3">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <table class="table table-hover table-bordered">
                        <tr>
                            <th>Name</th>
                            <td>{{user.name}}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{{user.email}}</td>
                        </tr>
                        <tr>
                            <th>Create Date</th>
                            <td>{{user.created_at}}</td>
                        </tr>
                    </table>
                  <nuxt-link :to="{name:'admin'}" class="btn btn-outline-primary">go to admin panel</nuxt-link>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: "Profile",
  middleware: 'auth',
  head: {
    title: "profile -" + process.env.PROJECT_NAME,
  },
  computed:{
    user(){
      return this.$auth.user
    }
  },
}
</script>

<style scoped>

</style>
