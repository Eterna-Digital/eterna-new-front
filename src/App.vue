<template>
  <div id="app">
    <SideBar/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue"
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    SideBar,
    HelloWorld
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding: 0;
}
body {
    display: block;
    margin: 0px !important;
}
</style>
