import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import projects from '../views/projects.vue'
import infomation from '../views/infomation.vue'
import contactUs from '../views/contactUs.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/infomation',
      name: 'infomation',
      component: infomation
    },  
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    }, 
   

 
  ]
})

export default router
