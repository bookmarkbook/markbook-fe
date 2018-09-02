import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login/login-page.vue'
import User from './views/user/user-view.vue'
import Signup from './views/signup/signup-page.vue'
import Todo from './views/todo/todo-page.vue'
import Bookmark from './views/bookmark/bookmark-view.vue'
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
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component: Bookmark
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
