const UserCenter = () => import(/* webpackChunkName: "Home" */ '@/views/userCenter')
const mNavigation = () => import(/* webpackChunkName: "mNavigation" */ '@/components/common/m-navigation')

const router = [
  {
    path: '/userCenter',
    name: 'userCenter',
    components: {
      default: UserCenter,
      navigation: mNavigation
    },
    meta: {
      requireAuth: false
    }
  }
]

export default router
