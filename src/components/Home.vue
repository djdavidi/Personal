<template>
  <div class="home">
    <div>
      <img src="../assets/Logo1.svg" class="logo">
    </div>
    <div class="profile links">
      <div><a href="">About</a></div>
      <div><a href="">Projects</a></div>
      <div><a href="">Design</a></div>
      <div><a href="">Blog</a></div>
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
.home {
  background-color: #fff;
  margin-top: 7%;
  width: 50%;
  height: 45%;
  text-align: left;
  line-height: 2em;
  font-size: 1.3em;
  font-weight: bold;
  /*background: yellow;*/
} 
.fade-in {
  animation: 3s fadein;
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
  color: #55ff55;
}

</style>
