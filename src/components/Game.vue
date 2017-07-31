<template>
  <div class="game">
    <div class="title">{{title}}</div>
      <div>{{currentPrompt}}</div>
<!--       <div class="choice-row">
        <div class="choice">Option 1</div> <div class="choice">Option 2</div>
      </div>
      <div class="choice-row">
        <div class="choice">Option 3</div> <div class="choice">Option 4</div>
      </div> -->
      <div class="choice-container">
          <template v-for="(option, index) in options">
             <div class="choice">{{option}} :: {{index}}</div> 
          </template>
      </div>
  </div>
</template>

<script>
export default {
  name: 'game',
  data () {
    return {
      title: 'The Meeting',
      // guide: "type help then enter to view list of commands"
      help: "type inspect [object] to see some choices",
      cheat: "Click here to skip the game",
      selectedChoice: 0,
      options: ["thing1", "thing2", "thing3", "thing4"],
      currentPrompt: "Current Prompt Hello"
    }
  },
    mounted() {
      window.addEventListener("keyup", (e) => {
        if(e.keyCode === 37|| 38|| 39|| 40) {
          this.arrowKeyPressed(e);
        }
      });
    },
//  left arrow  37
//  up arrow  38
//  right arrow 39
//  down arrow  40
// if none of these run, just flash the current selected one again
    methods: {
      arrowKeyPressed(key) {
        console.log("in game key", key.keyCode)
        if (key.keyCode === 38) {
          console.log("38 up")
          if(this.selectedChoice === 3 || this.selectedChoice === 4) {
            this.selectedChoice = this.selectedChoice - 2;
          }
        } else if (key.keyCode === 40) {
          console.log("40 down")
            if(this.selectedChoice === 1 || this.selectedChoice === 2) {
              this.selectedChoice = this.selectedChoice + 2;
            }
        } else if (key.keyCode === 37) {
          console.log("37 left")
            if(this.selectedChoice === 2 || this.selectedChoice === 4) {
              this.selectedChoice = this.selectedChoice - 1;
            }
        }  else if (key.keyCode === 39) {
          console.log("39 right")
            if(this.selectedChoice === 1 || this.selectedChoice === 3) {
              this.selectedChoice = this.selectedChoice + 1;
            }
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game {
  width: 100%;
  height: 50%;
  text-align: left;
  line-height: 2;
  font-size: 18px;
  font-weight: bold;
}
.title {
  font-size: 24px;
  font-style: italic;
  text-align: center;
  width: 100%;
}

.choice {
  width: 45%;
  text-align: center;
  border-color: #55ff55;
  border-radius: 5px;
  border-bottom: 5px;
  border-style: solid;
  margin-bottom: 3%;
  margin-right: 3%;
}
.choice:hover {
  /*background-color: #55ff55;*/
  /*border-color: teal;*/
  /*border: none;*/
  border-top: 5px;
  border-bottom: 5px;
  /*color: #fff;*/
}

.choice-row, .choice-container {
  display: flex;
  flex-wrap: wrap;
  height: 50%;
}


input {
  background-color: #000;
  border: none;
  color: #fff;
  font-size: 18px;
}

input:placeholder {
  color: #fff;
}

input:focus {
  color: pink;
  background-color: yellow;
}


</style>
