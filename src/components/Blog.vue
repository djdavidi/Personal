<template>
  <div class="blog-container">
  <blog-post v-for="post in blogposts" :key="post.title" :post="post"></blog-post>
  </div>
</template>

<script>
// import logo from "../assets/Logo1.jpg"
// https://github.com/showdownjs/showdown
import BlogPost from './BlogPost';
export default {
  name: 'blog',
  data () {
    return {
      intro: null,
      currentLink: "about",
      blogposts: [{
        date: "123/34/32",
        title: "HELLO Argentina1",
        body: "thing one two three four"
      },{
        date: "123/34/32",
        title: "HELLO Argentina2",
        body: "thing one two three four"
      },{
        date: "123/34/32",
        title: "HELLO Argentina3",
        body: "thing one two three four"
      },{
        date: "123/34/32",
        title: "HELLO Argentina3",
        body: "thing one two three four"
      },{
        date: "123/34/32",
        title: "HELLO Argentina3",
        body: "thing one two three four"
      },{
        date: "123/34/32",
        title: "HELLO Argentina3",
        body: "thing one two three four"
      },{
        date: "123/34/32",
        title: "HELLO Argentina3",
        body: "thing one two three four"
      },{
        date: "123/34/32",
        title: "HELLO Argentina3",
        body: "thing one two three four"
      },{
        date: "123/34/32",
        title: "HELLO Argentina3",
        body: "thing one two three four"
      },{
        date: "123/34/32",
        title: "HELLO Argentina3",
        body: "thing one two three four"
      },{
        date: "123/34/32",
        title: "HELLO Argentina3",
        body: "thing one two three four"
      },{
        date: "123/34/32",
        title: "HELLO Argentina3",
        body: "thing one two three four"
      }]
    }
  },
  components: {
    BlogPost
  }
}
</script>

<style scoped>
div.blog-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  text-align: left;
  align-items: left;
}

</style>
