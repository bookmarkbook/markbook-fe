import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login/login-page.vue'
import Signup from './views/signup/signup-page.vue'
import Todo from './views/todo/todo-page.vue'
import View404 from './views/error/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: View404
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
