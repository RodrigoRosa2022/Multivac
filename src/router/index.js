import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import Instructions from '../views/Instructions.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
  ,
  {
    path: '/about',
    name: 'About',
    component: About
  }
  ,
  {
    path: '/instructions',
    name: 'Instructions',
    component: Instructions
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
