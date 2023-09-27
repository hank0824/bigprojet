import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/pages/Login.vue'
import NotFound from '../views/NotFound.vue'
import HelloWorld from '../components/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
    ,
    {
      path: "/:pathMatch(.*)*",
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
