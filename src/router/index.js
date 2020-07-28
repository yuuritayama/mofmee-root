import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import Profile from '@/components/pages/Profile'
import Illustration from '@/components/pages/Illustration'
import Work from '@/components/pages/Work'
import WorkDetail from '@/components/pages/WorkDetail'
import WebService from '@/components/pages/WebService'
import WebServiceDetail from '@/components/pages/WebServiceDetail'
import Contact from '@/components/pages/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/illustration',
      component: Illustration
    },
    {
      path: '/work',
      component: Work
    },
    {
      path: '/work/:id',
      component: WorkDetail
    },
    {
      path: '/web-service',
      component: WebService
    },
    {
      path: '/web-service/:id',
      component: WebServiceDetail
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})