const Find = () => import(/* webpackChunkName: "Home" */ '@/views/Find')
const mNavigation = () => import(/* webpackChunkName: "mNavigation" */ '@/components/common/m-navigation')

const router = [
  {
    path: '/find',
    name: 'find',
    components: {
      default: Find,
      navigation: mNavigation
    },
    meta: {
      requireAuth: false
    }
  }
]

export default router
