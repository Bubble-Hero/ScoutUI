import Vue from 'vue'
import Router from 'vue-router'
import index from "@/pages/index"
import intro from "@/pages/intro"
import compo from "@/pages/compo"
import team from "@/pages/team"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'index',
      component: index
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/intro',
      component: intro
    },
    {
      path: '/compo',
      component: compo
    },
    {
      path: '/team',
      component: team
    }
  ]
})
