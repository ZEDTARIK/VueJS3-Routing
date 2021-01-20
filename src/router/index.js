import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/blog'
import Show from '../views/blog/Show'
import AddPost from '../views/blog/AddPost'
import EditPost from '../views/blog/EditPost'
import Page404 from '../views/Page404'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    name: 'show-post',
    component: Show,
    props: true
  },
  ,
  {
    path: '/blog/edit/:id',
    name: 'edit-post',
    component: EditPost,
    props: true
  },
  {
    path: '/blog/new',
    component: AddPost,
  },
  {
    path: '/:catchAll(.*)',
    component: Page404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
