import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Produk from '../components/page/Produk.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/tentang_kami',
    name: 'tentang_kami',
    component: () => import('../components/page/TentangKami.vue')
  },
  {
    path: '/layanan',
    name: 'layanan',
    component: () => import('../components/page/Layanan.vue')
  },
  {
    path: '/produk',
    name: 'produk',
    component: () => import('../components/page/Produk.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/page/Footer.vue')
  }






]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
