import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import InvoiceDetail from "@/views/invoice-detail/InvoiceDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/invoice-detail/:id?',
      name: 'Detail',
      component: InvoiceDetail
    }
  ]
})

export default router
