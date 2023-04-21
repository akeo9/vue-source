import { createRouter, createWebHistory } from 'vue-router'
import Header from '@/views/Header.vue'
import LeftShort from '@/views/LeftShort.vue'
import RightLong from '@/views/RightLong.vue'
import LeftLong from '@/views/LeftLong.vue'
import RightShort from '@/views/RightShort.vue'
import Footer from '@/views/Footer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
        component: {
          header: Header,
          leftShort: LeftShort,
          rightLong: RightLong,
          leftLong: LeftLong,
          rightShort: RightShort,
          footer: Footer
        },
        props: true
    }
  ]
})

export default router
