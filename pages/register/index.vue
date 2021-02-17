<template>
  <div class="container mt-3">
    <div class="row">
      <h2 class="bg-success p-2 text-center text-white rounded-pill">Register</h2>
      <div class="col-md-6 offset-md-3">
        <div class="mb-2">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" v-model="userRegister.name"/>
        </div>
        <div class="mb-2">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="userRegister.email"/>
        </div>
        <div class="mb-2">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="userRegister.password"/>
        </div>
        <div>
          <button class="btn btn-outline-success form-control" @click="register">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  middleware: 'guest',
  head:{
    title: "Register -" + process.env.PROJECT_NAME ,
  },
  data(){
    return{
      userRegister:{
        name: "",
        email: "",
        password: ""
      }
    }
  },
  methods:{
    async register(){
      try{
        this.$toast.show('Registered In')
        await this.$axios.post('/register',this.userRegister)
        await this.$auth.loginWith("laravelJWT", {
          data:{
            email:this.userRegister.email,
            password:this.userRegister.password
          },
        });
        this.$toast.success('Successfully Registered')
      }catch (e){
        if(e.response.status ===401){
          this.$toast.error('Check your email and password')
        }else {
          this.$toast.error('Unable to Registered')
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
