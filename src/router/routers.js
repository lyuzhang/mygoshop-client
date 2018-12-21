/**
 * Created by DeLL on 2018/12/21.
 */
/*注册路由*/
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
export default [
  {
    path: '/msite',
    component: MSite
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  },

  {
    path: '/',
    redirect: '/msite'
  }
]
