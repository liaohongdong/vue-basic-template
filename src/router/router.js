import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import RouterHome from '@/router/home'
import RouterFind from '@/router/find'
import RouterUserCenter from '@/router/usercenter'

// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home')
// const About = () => import(/* webpackChunkName: "About" */ '@/views/About')
// const Home = (resolve) => require(['@/views/Home'], resolve)
// const About = (resolve) => require(['@/views/About'], resolve)

NProgress.configure({
  showSpinner: false
})

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: 'home',
      meta: {
        requireAuth: false
      }
    },
    ...RouterHome,
    ...RouterFind,
    ...RouterUserCenter,
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to) => {
  NProgress.done()
})

export default router
