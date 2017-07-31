<template>
  <div class="home">
    <div v-if="isGameClosed">
      <div>Hi </div>
      <div>I'm David</div>
      <div>I'm 000 a software developer currently located in New York City</div>

      <div> You can find me reading(usually sci-fi/fantasy), drawing, listening to music, snowboarding,
      and propbably trying out some random hobby.</div>
      <div> Also a bit of a gamer, either find me online in whatever game I'm currently playing or at Pax West and East or NY Comic con</div>

      <div>If you want to get in touch you can through a few different channels</div>
      <div> git me at my github to check out what I've been working on</div>
      <div>link up with me on my linkedin: davidscherban </div>
      <div>Gram me at my instagram</div>
      <div> email me at my email Email: </div>
      <div>tweet me at my twitter</div>
      <div>or If you want check out my Resume below. Press enter </div>
    </div>
    <game v-if="!isGameClosed"></game>
  </div>
</template>

<script>
import Game from './Game.vue'
export default {
  name: 'home',
  data () {
    return {
      isGameClosed: true,
      isResumeOpen: false,
    }
  },
  components: {
    Game
  },
  mounted() {
    window.addEventListener("keyup", (e) => {
      if(e.keyCode === 13) {
        this.enterPressed();
      }
    });
  },
  methods: {
    enterPressed() {
      this.isGameClosed = !this.isGameClosed;
      console.log("pressed")
    }
  }
  // have event handler for game and resuem, then store in local storage
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  margin-top: 5%;
  width: 50%;
  height: 45%;
  text-align: left;
  line-height: 1.8;
  font-size: 18px;
  font-weight: bold;
  /*background: yellow;*/
} 
</style>
