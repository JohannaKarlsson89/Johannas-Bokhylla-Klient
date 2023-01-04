import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookView from '../views/BookView.vue';
import AboutView from '../views/AboutView.vue';
import UpdateBook from '../views/BookUpdateView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: HomeView
    },
    {
      path: '/bokhylla',
      name: 'bokhylla',
 
      component: BookView
    },
    {
    path: '/aboutVue',
    name: 'aboutVue',
    component: AboutView
  }, 
  {
    path: '/bokhylla/:id',
    name: 'UpdateBook',
    component: UpdateBook
  }

  ]
})

export default router
