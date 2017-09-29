<template>
 <div class="about">
    <div id="intro"></div>
    <div v-show="doneWithIntro" class="contact-info fade-in">
          <a class="linkedin" target="_blank" href=""><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
          <a class="github" href=""><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
    </div>
</div>
</template>

<script>
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// USE THIS TO SET FLAG SO I DONT KEEP SHOWING THEM THE ANIMATION
// https://codepen.io/alandunning/pen/RWRrEW
const profile = [
      "Hi,",
      "I'm David.",
      "A gamer.",
      "An artist.",
      "A designer.",
      "A bibliophile.",
      "A fullstack developer.",
      "Contact me on Linkedin or see what I'm up to on Github."
];
export default {
  name: 'about',
  data () {
    return {
      introElement: null,
      doneWithIntro: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.addTextToHTML(profile, 0, 0);    
    }, 200);
  },
  methods: {
    addTextToHTML(profile, listIndex, stringIndex) {
      // console.log("profile", profile)
      let timeoutLength = 50;
      if (stringIndex === 0) {
        let divToAppend = document.createElement("div")
        // let blink = document.createElement(type, props, children)
        this.introElement = document.getElementById("intro");
        divToAppend.className += "thing"
        // divToAppend.append(document.)
        if(this.introElement) {
          this.introElement.append(divToAppend);
        }
        // this.introElement = divToAppend;
      }
      setTimeout(() => {
        if(this.introElement) {
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
        }
      }, 50);
    }
  }

}
</script>

<style scoped>

.about {
  margin-top: 10%;
  min-height: 500px;
  min-width: 50px;
  width: 80%;
  height: 95%;
  text-align: left;
  line-height: 1.8rem;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: left;
  /*background: yellow;*/
} 
#intro {
  height: 60%;
  text-align: left;
  width: 100%;
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
.github > i, .linkedin > i {
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
}

.contact-info {
  height: 40%;
  width: 80%;
  margin-top: 5%;
  display: flex;
  justify-content: space-around;
}
.contact-info a {
  /*color: #55ff55;*/
  text-decoration: none;
}
.contact-info  i:hover {
   color: #FFD700;;
   /*-webkit-text-stroke-width: 1px;*/
   /*-webkit-text-stroke-color:  #ff0000;*/
  transform: scale(1.1) translateY(-2px);
}
</style>
