<template>
  <div id="app">
    <my-header></my-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import MyHeader from './components/myHeader.vue'
  export default {
    name: 'app',
    components: {
      MyHeader
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
