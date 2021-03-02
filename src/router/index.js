import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Bai9/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bai10-1',
    component: () => import('../views/Bai10/Bai1')
  },
  {
    path: '/bai10-2',
    component: () => import('../views/Bai10/Bai2')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Bai1/TongQuat')
  },
  {
    path: '/sanpham',
    component: () => import('../views/Bai1/ProductPage'),
  },
  {
    path: '/hoadon',
    component: () => import('../views/Bai1/HoaDon'),
  },
  {
    path: '/thongke',
    component: () => import('../views/Bai1/ThongKe'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
