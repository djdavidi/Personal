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
* {
  /*outline: 1px solid red;*/
}
#app {
  height: 99%;
  /*margin-top: 1%;*/
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
  /*background-color: #d3d3d3;*/
  background: #252525;
  color: #fff;
  margin: 0;
  height: 100vh;
  width: 100vw;
  font-size: 16px;
}
html, body {
  height:100vh; margin:0; padding:0;
  box-sizing: border-box;
}
</style>
