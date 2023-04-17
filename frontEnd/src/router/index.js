import { createRouter,createWebHistory } from "vue-router";
import HomePage from '@/components/HomePage'
import AboutPage from '@/components/AboutPage'
import Contact from '@/components/Contact'
import CartPage from '@/components/CartPage'
const   routes =[
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/carte',
      name: 'CartPage',
      component: CartPage
    }
  ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  export default router