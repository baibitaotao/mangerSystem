import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
import detail from '../components/detail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
