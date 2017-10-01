<template>
  <div class="projects">
<!--     <div v-for="n in 5" class="project">
     Project Name then opposite side will be github link 
    </div> -->
    <div>
    The actual project page will be up soon. In the meantime check out my Github.
    </div>
    <div>
      <a class="github" href=""><i class="fa fa-github fa-5x" aria-hidden="true"></i></a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'projects',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.projects {
  height: 100%;
  width: 80%;
  margin-left: 10%;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.projects a {
  color: #252525;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
}
.projects i:hover {
  transform: scale(1.1) translateY(-2px);
  color: #000;
}
.project {
  /*opac*/
}
</style>
