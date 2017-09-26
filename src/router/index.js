import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Art from '@/components/Art'
import Projects from '@/components/Projects'

Vue.use(Router)
// add 404
export default new Router({
  routes: [
    {
      path: '',
      component: Home,
      children: [
      	{
      		path: "/",
      		component: About
      	},
      	{
      		path: "/blog",
      		component: Blog
      	},
      	{
      		path: "/art",
      		component: Art
      	},
      	{
      		path: "/projects",
      		component: Projects
      	}
      ]
    }
  ]
})
