<template>
  <div id="app">
    <router-link v-if="$route.name != 'home'" :to="{ name: 'home' }">Cars</router-link>
    <span>||</span>
    <router-link v-if="$route.name != 'jobsmain'" :to="{ name: 'jobsmain' }">Jobs</router-link>
    <span>||</span>
    <router-link v-if="$route.name != 'housesmain'" :to="{ name: 'housesmain' }">Houses</router-link>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
