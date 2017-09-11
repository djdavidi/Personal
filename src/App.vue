<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  border: 0;
  display: flex;
  justify-content: center;
  font-family: 'Inconsolata', monospace;
  background-color: #fff;
}

body {
  background-color: #fff;
  margin: 0;
  height: 100vh;
  width: 100vw;
}
</style>
