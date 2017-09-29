import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Art from '@/components/Art'
import Projects from '@/components/Projects'
import ErrorPage from '@/components/ErrorPage'

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
          name: "about",
      		component: About
      	},
      	{
      		path: "/blog",
          name: "blog",
      		component: Blog
      	},
      	{
      		path: "/art",
          name: "art",
      		component: Art
      	},
      	{
      		path: "/projects",
          name: "projects",
      		component: Projects
      	},{
          path: "*",
          name: "error",
          component: ErrorPage
        }
      ]
    },
  ]
})
