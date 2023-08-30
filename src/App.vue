<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" :to="{name:'Home'}">Navbar</router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav me-auto">

        <li class="nav-item">
          <router-link class="nav-link active" :to="{name:'Home'}">Home</router-link>
          <span class="visually-hidden">(current)</span>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Services'}">Service</router-link>          
        </li>
        <li class="nav-item">         
          <router-link class="nav-link" :to="{name:'Products'}">Products</router-link>      
        </li>

        <li class="nav-item">
          <router-link class="nav-link" :to="{name:'Contact'}">Contact</router-link>          
        </li>
      </ul>

      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit" @click="$router.push({name:'Services'})">Search</button>
      </form>

      <button class="btn btn-warning mx-2" @click="$router.push({name:'SignUp'})">Sign Up</button>
        <!-- <button class="btn btn-secondary my-2 my-sm-0" @click="$router.go(-1)">Next</button> -->
    </div>
  </div>
</nav>

<div class="main">
  <router-view></router-view>
</div>

</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
