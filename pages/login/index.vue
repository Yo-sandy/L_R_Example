<template>
        <div class="container mt-3">
            <div class="row">
                <h2 class="bg-primary p-2 text-center text-white rounded-pill">Login</h2>
                <div class="col-md-6 offset-md-3">
                    <div class="mb-2">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" v-model="userLogin.email"/>
                    </div>
                    <div class="mb-2">
                      <label for="password" class="form-label">Password</label>
                      <input type="password" class="form-control" id="password" v-model="userLogin.password"/>
                    </div>
                    <div>
                        <button class="btn btn-outline-primary form-control" @click="login">Login</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
  export default {
    name: "Login",
    middleware: 'guest',
    head:{
      title: "Login -" + process.env.PROJECT_NAME ,
    },
    data(){
      return{
        userLogin:{
          email: "",
          password: ""
        }
      }
    },
    methods:{
      async login(){
        try{
          this.$toast.show('Logging In')
          let res = await this.$auth.loginWith("laravelJWT", {
            data:{
              email:this.userLogin.email,
              password:this.userLogin.password
            },
          });
          this.$toast.success('Successfully Logged')
        }catch (e){
         if(e.response.status ===401){
           this.$toast.error('Check your email and password')
         }else if(e.response.status ===422){
           this.$toast.error('Check your email and password is valid formatted')
         }else {
           this.$toast.error('Unable to Login')
         }
        }
      }
    }
  }
</script>

<style scoped>

</style>
