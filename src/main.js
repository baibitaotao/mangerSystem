// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import './style/index.less'

Vue.use(elementUi)
Vue.config.productionTip = false

// 注册全局守卫,在路由跳转前，对路由进行判断。防止未登录的进行恶意跳转
router.beforeEach((to, from, next) => { 
   if(localStorage.getItem('mytoken')){
      next()
   }
   else{
     if(to.fullPath === '/login'){
      next()  
     }
     else{
       next({path:'/login'}) 
     }
   }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
