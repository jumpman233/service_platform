import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Mine from '@/components/Mine'
import Recommend from '@/components/Recommend'
import First from '@/components/First'
import House from '@/components/calculator/House'
import Result from '@/components/calculator/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }, {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    }, {
      path: '/first',
      name: 'First',
      component: First
    }, {
      path: '/house',
      name: 'House',
      component: House
    }, {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
