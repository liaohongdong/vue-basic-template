const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home')
const About = () => import(/* webpackChunkName: "About" */ '@/views/About')
const mNavigation = () => import(/* webpackChunkName: "mNavigation" */ '@/components/common/m-navigation')

const router = [
  {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      navigation: mNavigation
    },
    meta: {
      requireAuth: false
    }
  }
]

export default router
