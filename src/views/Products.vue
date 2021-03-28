<template>
    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="card">
              <div class="card-header">
                Products
              </div>
              <div class="card-body">
                  <table class="table table-danger">
                      <tr>
                        <td>sl</td>
                        <td>Product Name</td>
                        <td>Price</td>
                      </tr>
                      <tr v-for="(product,index) in products" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{product.name}}</td>
                        <td>{{product.price}}</td>
                      </tr>
                  </table>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  created(){
    if(AppStorage.getToken() == undefined){
         this.$router.push({path: '/login'})
    }else{
       axios.defaults.headers.common['Authorization'] = 'Bearer '+AppStorage.getToken();
       this.getProducts();
    }
  },
  data: function(){
    return{
      products: []
    }
  },
  methods:{
    getProducts(){
      axios.get(domainname+'/api/products')
      .then((response) => {
          this.products = response.data;
          console.log(response);
      })
      .catch((error) => {
        error.response.data.message
          console.log(error);
      })
    }
  },
  components: {
    HelloWorld,
  },
};
</script>
