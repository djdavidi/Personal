<template>
  <div class="home">
    <div class="logo-wrapper">
    <div class="logo-container">
      <img src="../assets/Logo13.svg" class="logo">
    </div>
    </div>
    <div class="profile-links">
      <div><router-link to="/" :class="{'current-link': $route.path === '/'}">About</router-link></div>
      <div><router-link to="/blog" :class="{'current-link': $route.path === '/blog'}">Blog</router-link></div>
      <div class="right-link"><router-link to="/art" :class="{'current-link': $route.path === '/art'}">Art</router-link></div>
     <div class="right-link"><router-link to="/projects" :class="{'current-link': $route.path === '/projects'}">Projects</router-link></div>
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
      currentLink: "about"
    }
  },
  mounted() {
    console.log("thispath", this.$route.path)
  },
  methods: {
  }
}
</script>

<style scoped>

.logo {
  height: 100%;
  width: 50%;
  margin-left: 10%;
}
.logo-container {
  display: flex;
  /*justify-content: center;*/
}

.current-link {
  border-style: none none solid none;
  border-bottom-color:  #FFDF00;
}

.profile-links  a:hover {
  border-color:   #FFDF00;
  border-style: solid none solid none;
}
.home {
  /*background-color: #fff;*/
  margin-top: 2%;
  width: 50%;
  height: 90%;
  text-align: left;
  line-height: 2em;
  font-size: 1.3em;
  font-weight: bold;
  /*background: yellow;*/
} 
.router-wrapper {
  height: 70%;
}
.home > div.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fade-in {
  animation: 3s fadein;
}
.home .profile-links {
  font-family: 'Montserrat', sans-serif;
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: left;
  margin-top: 3%;
}
.profile-links div {
  width: 20%;
  margin-right: 5%;
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
   color: #000;
   text-decoration: none;
   font-size: 1.4em;
}

</style>
