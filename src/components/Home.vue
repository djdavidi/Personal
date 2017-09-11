<template>
  <div class="home">
    <div>
    <div class="logo-container">
      <img src="../assets/Logo13.svg" class="logo">
    </div>
    </div>
    <div class="profile-links">
      <div><router-link to="/about" :class="{'current-link': currentLink === 'about'}">About</router-link></div>
      <div><router-link to="/blog" :class="{'current-link': currentLink === 'about'}">Blog</router-link></div>
      <div class="right-link"><router-link to="/art" :class="{'current-link': currentLink === 'about'}">Art</router-link></div>
     <div class="right-link"><router-link to="/projects" :class="{'current-link': currentLink === 'about'}">Projects</router-link></div>
    </div>
    <router-view></router-view> 
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
  },
  methods: {
  }
}
</script>

<style scoped>

.logo {
  height: 100%;
  width: 50%;
}
.logo-container {
  display: flex;
  justify-content: center;
}

.current-link {

  border-style: none none solid none;
  border-bottom-color: #ff0000;
}
.home {
  background-color: #fff;
  margin-top: 2%;
  width: 40%;
  height: 50%;
  text-align: left;
  line-height: 2em;
  font-size: 1.3em;
  font-weight: bold;
  /*background: yellow;*/
} 

.home > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fade-in {
  animation: 3s fadein;
}
.profile-links {
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /*align-items: right;*/
  text-align: left;
}
.profile-links div {
  width: 25%;
}
/*align a in middle*/


.right-link {
  text-align: right;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.contact-info {
  height: 15%;
  margin-top: 5%;
}
a {
   color: #000;
   text-decoration: none;
}

</style>
