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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  border: 0;
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  /*change once do mobile optimization*/
  min-width: 720px;
}

body {
  background-color: #d3d3d3;
  margin: 0;
  height: 100vh;
  width: 100vw;
  font-size: 16px;
}
</style>
