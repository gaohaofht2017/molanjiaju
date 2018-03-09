import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Login from '@/pages/login/login'
import City from '@/pages/home/children/city'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path:'city',
          component: City
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
]})

