<template>
  <div class="home">
  <!-- split into component -->
    <div class="header">
      <div class="logo-wrapper">
        <img src="../assets/Logo13.svg" class="logo">
      </div>
      <div class="profile-links">
        <div><router-link to="/" :class="{'current-link': $route.path === '/'}">About</router-link></div>
        <div><router-link to="/blog" :class="{'current-link': $route.path === '/blog'}">Blog</router-link></div>
        <div class="right-link"><router-link to="/art" :class="{'current-link': $route.path === '/art'}">Art</router-link></div>
       <div class="right-link"><router-link to="/projects" :class="{'current-link': $route.path === '/projects'}">Projects</router-link></div>
      </div>
    </div>

    <div class="router-wrapper">
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
// import logo from "../assets/Logo1.jpg"
export default {
  name: 'home',
  data () {
    return {
      intro: null,
      currentLink: "about",
    }
  },
  mounted() {
    console.log("thispath", this.$route)
  },
  methods: {
  }
}
</script>

<style scoped>

.home {
  /*background-color: #fff;*/
  /*margin-top: 2%;*/
  width: 100%;
  height: 100%;
  text-align: left;
  line-height: 2em;
  font-size: 1.3em;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
  /*background: yellow;*/
} 
.header {
  width: 100%;
  height: 18%;
  background: #fff;
  /*background: #d3d3d3;*/
  display: flex;
  /*change to row for more typical left to right nav bar*/
  flex-direction: column;
  align-items: center;
  /*justify-content: space-around;*/

}
.logo {
  height: 100%;
  width: 50%;
  /*margin-left: 10%;*/
}

.current-link {
  border-color: cyan;
  border-style: none none solid none;
}

.profile-links  a:hover {
  border-color:  cyan;
  border-style: solid none none none;
}
.profile-links > div:hover {
  transform: scale(1.05) translateY(-2px);
}

.profile-links .current-link:hover {
  border-style: solid none solid none;
}
.router-wrapper {
  height: 82%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.home .logo-wrapper{
  margin-top: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  /*width: 50%;*/
}
.fade-in {
  animation: 3s fadein;
}
.home .profile-links {
  font-family: 'Montserrat', sans-serif;
  /*margin-top: 1%;*/
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  /*text-align:;*/
  /*margin-top: 3%;*/
  width: 50%;
  /*margin-bottom: 1%;*/
  margin-top: 1%;
  /*width: 50%;*/
}
.profile-links div {
/*  width: 20%;
  margin-right: 5%;*/
}
/*align a in middle*/


.profile-links div.right-link {
  margin-right: 0;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

a {
   color: #252525;
   text-decoration: none;
   font-size: 1.4em;
}

</style>
