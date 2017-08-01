<template>
  <div class="home">
    <div id="intro"></div>
    <div v-if="doneWithIntro" class="contact-info fade-in">
        <div> Checkout my <a href="">Github.</a></div>
        <div> Connect on <a href="./">Linkedin.</a></div>
        <div> Send me an <a href="mailto:address@example.com">Email.</a></div>
    </div>
  </div>
</template>

<!-- TO DO

ADD UNDERSCORE AND REMOVE AT EACH LINE AT BREAK
MAKE LINKS DIFFERENT NEON COLORS
ADD SVG ANIMATIONS FOR EACH ONE
ADD ICONS FOR CONTACT STUFF?
https://codepen.io/djdavidi/pen/oexxGv



 -->

<script>
import profile from "../assets/profile.js"
export default {
  name: 'home',
  data () {
    return {
      introElement: null,
      doneWithIntro: false
    }
  },
  mounted() {
    this.introElement = document.getElementById("intro");
    this.addTextToHTML(profile, 0, 0);
  },
  methods: {
    addTextToHTML(profile, listIndex, stringIndex) {
      // console.log("profile", profile)
      if (stringIndex === 0) {
        let divToAppend = document.createElement("div")
        this.introElement.append(divToAppend)
        // this.introElement = divToAppend;
      }
      setTimeout(() => {
        this.introElement.innerHTML += profile[listIndex][stringIndex];
        if ((profile.length - 1 === listIndex) && (profile[listIndex].length - 1 === stringIndex)) {
          this.doneWithIntro = true;
          console.log("done")
          return;
        } else if (profile[listIndex].length -1 > stringIndex) {
          stringIndex++;
          this.addTextToHTML(profile, listIndex, stringIndex)
        } else if (profile[listIndex].length - 1 === stringIndex && (profile.length !== listIndex)) {
          stringIndex = 0;
          listIndex++;
          setTimeout(() => {
            this.addTextToHTML(profile, listIndex, stringIndex);
          }, 300);
        }
      }, 50);
    }
  }
}
</script>

<style scoped>
.home {
  margin-top: 7%;
  width: 50%;
  height: 45%;
  text-align: left;
  line-height: 1.8;
  font-size: 18px;
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
