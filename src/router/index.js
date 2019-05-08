import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
// import detail from '../components/detail/deatil.vue'
import detail from '../components/detail.vue'
import abc from '../components/detailSon/3-1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      redirect: 'detail/abc',
      children:[{
        path:'abc',
        name:'abc',
        component:abc
      }]
    },
    
    // 重定向一个
    {
      name:'default',
      path:'*',
      redirect:'/login'
    }
  ]
})
