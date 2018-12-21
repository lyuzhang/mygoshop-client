/**
 * Created by DeLL on 2018/12/21.
 */
/*路由器模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'

Vue.use(VueRouter)
export  default new VueRouter({
  mode:'history',
  routes
})
