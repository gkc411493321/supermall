import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const ProFile = () => import('views/profile/ProFile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title: '首页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta:{
      title: '分类'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta:{
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: ProFile,
    meta:{
      title: '个人'
    }
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
