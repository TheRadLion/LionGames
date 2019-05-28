import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Article from './views/Article.vue'
import Legoscrabble from './views/Legoscrabble.vue'
// import Tictactoe from './views/Tictactoe.vue'
import Chess from './views/Chess.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/legoscrabble',
      name: 'legoscrabble',
      component: Legoscrabble
    },
    // {
    //   path: '/tictactoe',
    //   name: 'tictactoe',
    //   component: Tictactoe
    // },
    {
      path: '/chess',
      name: 'chess',
      component: Chess
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
