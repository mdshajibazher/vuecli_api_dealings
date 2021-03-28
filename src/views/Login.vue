<template>
<div class="row justify-content-center m-3">
    <div class="col-md-4 mt-5">
      <div class="card">
        <div class="card-header">
            Login
        </div>
        <div class="card-body">
        <form @submit.prevent="login" @keydown="form.onKeydown($event)">
          <p v-if="msg" class="alert alert-danger">{{msg}}</p>
          <p v-if="success" class="alert alert-success">{{success}}</p>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input v-model="form.email" type="email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" >
           <has-error :form="form" field="email"></has-error>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input v-model="form.password" type="password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" >
           <has-error :form="form" field="password"></has-error>
        </div>
        
        <button :disabled="form.busy"  type="submit" class="btn btn-primary">Submit</button>
      </form>
        </div>
      </div>
    </div>
</div>

</template>

<script>
import { Form, HasError, AlertError } from 'vform'

export default {
  created(){
    if(AppStorage.getToken() != undefined){
         this.$router.push({path: '/'})
    } 
  },
    components:{
      HasError,
      AlertError,
    },
    data: function(){
      return{
        msg: "",
        success: "",
        form: new Form({
          email: '',
          password: '',
        }),
      }
    },
    methods:{
        login(){
        this.msg = "";
        this.form.post(domainname+'/api/login')
        .then(({ data }) => {
          if(data.message){
              this.msg = data.message;
          }else if(data.access_token){
                this.success = 'Login Successfull';
                this.$router.push({path: '/'})
                AppStorage.store(data.access_token,JSON.stringify(data.user))              
          }
          console.log(data) 
          console.log(this.msg)
        })
        .catch(  (error) => {
          // handle error
          console.log(error);
        })

            }
  }
}
</script>

<style>

</style>