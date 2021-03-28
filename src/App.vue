<template>
  <div id="app">
    <div class="sidebar" v-if="this.$route.path != '/login'">
      <Sidebar/>
    </div>
    <div class="content">
          <router-view/>
    </div>


  </div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  created(){

  },
  components:{
    Sidebar
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
}
.sidebar{
  width: 20%
}
.content{
  width: 80%;
  margin-left: 10px
}


</style>
