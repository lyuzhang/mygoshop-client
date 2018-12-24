// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import NavHeader from './components/NavHeader/NavHeader.vue'


//注册全局组件
Vue.component('NavHeader',NavHeader);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  /*components: { App },
  template: '<App/>'*/
  render: h => h(App),
  router
})
