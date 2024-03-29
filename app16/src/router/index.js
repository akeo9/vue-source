import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TipsView from '../views/TipsView.vue'
import QuestionsView from '../views/QuestionsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tips',
      name: 'tips',
      component: TipsView
    },
    {
      path: '/questions',
      name: 'questions',
      component: QuestionsView
    },
  ]
})

export default router
