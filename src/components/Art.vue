<template>
  <div class="art">
    <p>
    You turn the corner to find a sparsely furnished room ahead.
    An empty frame adorns the wall, showing signs of a canvas having been crudely hacked out.
    There is no art to be found here, not today at least.
    </p>
  </div>
</template>

<script>
export default {
  name: 'art',
  data () {
    return {
    }
  },
  mounted() {
  },
}
</script>

<style scoped>
.art {
  height: 50%;
  width: 80%;
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
}

</style>
