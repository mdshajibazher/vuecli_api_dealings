<template>
        <div class="p-3 text-white bg-dark h100-vh">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span class="fs-4">Sidebar</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
           <router-link class="nav-link text-white" to="/">Home</router-link>
        </li>
        <li class="nav-item">
           <router-link class="nav-link text-white" to="/products">Products</router-link>
        </li>
        <li>
            <router-link class="nav-link text-white" to="/about">About</router-link>
        </li>
    </ul>
        </div>
</template>

<script>
export default {

}
</script>

<style>
.h100-vh{
  height: 100vh;
}
.nav-pills .nav-link.router-link-exact-active{
    background-color: #0d6efd;
}
</style>