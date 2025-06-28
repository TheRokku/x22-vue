import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NotFound from '@/views/NotFound.vue'

//! Fix random url doesnt send to error page

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home - X22 Digital',
      },
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About - X22 Digital',
      },
      component: AboutView,
    },
    { path: '/:pathMatch(.*)*', component: NotFound, name: 'NotFound' },
  ],
})

export default router
