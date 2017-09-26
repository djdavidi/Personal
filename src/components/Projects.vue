<template>
  <div class="projects">
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
  font-size: 1rem;
  margin-top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.projects a {
  color: #000;
/*  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;*/
}
.projects i:hover {
  transform: scale(1.1) translateY(-2px);
  color: #DAA520;
}

</style>
