import Vue from 'vue'
import Router from 'vue-router'
import index from "@/pages/index"
import intro from "@/pages/intro"
import compo from "@/pages/compo"
import team from "@/pages/team"

import logincompon from "@/components/compo/LoginSubCompon/loginCompon"
import logincomcon1 from "@/components/compo/LoginSubCompon/loginComponCon1"
import logincomcon2 from "@/components/compo/LoginSubCompon/loginComCon2"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/intro',
      component: intro
    },
    {
      path: '/compo',
      component: compo,
      children: [
        {
          path: 'logincompon', name: 'loginCompon', component: logincompon,
          children: [
            {path: '', redirect: 'logincomcon1'},
            {path: 'logincomcon1', name: 'loginComponCon1', component: logincomcon1},
            {path: 'logincomcon2', name: 'loginComCon2', component: logincomcon2},
          ]
        },
      ]
    },
    {
      path: '/team',
      component: team
    }
  ]
})
