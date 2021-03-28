<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script> 
export default{
    created(){
    if(AppStorage.getToken() == undefined){
         this.$router.push({path: '/login'})
    } 
  },
}
</script>