/**
 * Created by DeLL on 2018/12/21.
 */
/*注册路由*/
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
export default [
  {
    path: '/msite',
    component: MSite,
    meta:{
      showFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta:{
      showFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta:{
      showFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      showFooter: true
    }
  },

  {
    path: '/',
    redirect: '/msite'
  },
  {
    path: '/login',
    component: Login
  }


]
