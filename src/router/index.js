// @标识src目录
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: Home
  // }
  // // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.path === '/login') return next()
  // 获取token
  // const tokenStr = window.sessionStorage.getItem('token')
  const tokenStr = window.localStorage.getItem('token')
  console.log(tokenStr)
  if (!tokenStr) return next('/login')
    // 必须有next()
  next()
})

export default router
