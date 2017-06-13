import Vue from 'vue'
import Router from 'vue-router'

import HomeMain from '../components/home/homeMain'
import CategoryMain from '../components/category/categoryMain'
import RankMain from '../components/rank/rankMain'
import MeMain from '../components/me/MeMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'homeMain',
      component: HomeMain
    },
    {
      path: '/category',
      name: 'categoryMain',
      component: CategoryMain
    },
    {
      path: '/rank',
      name: 'rankMain',
      component: RankMain
    },
    {
      path: '/me',
      name: 'meMain',
      component: MeMain
    },
    {
    	path:"*",
    	component:HomeMain
    }
  ]
})
