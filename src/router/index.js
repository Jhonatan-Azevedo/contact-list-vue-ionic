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
    props: true,
    component: () => import("../components/DetailContact/DetailContact.vue") 
  },
  {
    path: '/addContact',
    name: 'addContato',
    component: () => import("../components/AddContact/AddContact.vue") 
  },
]
  
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
