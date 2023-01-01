import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/List/List.vue')
  },
  {
    path: '/contato/:id',
    name: 'contato',
    component: () => import("../components/DetailContact/DetailContact.vue") 
  }
]
  
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
