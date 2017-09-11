<template>
  <div class="">
   <div>{{post.title}}</div>
   <div>{{post.date}}</div><span>time since posted{{post.date}} - {{new Date()}}</span>
   <div>{{post.body}}</div>
  </div>
</template>

<script>

export default {
  name: 'blogPost',
  props: ["post"],
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.blog-post-title {

}

.blog-post-date {

}

.blog-post-time-since {
  color: #d3d3d3;
}

.blog-post-body {

}

</style>
