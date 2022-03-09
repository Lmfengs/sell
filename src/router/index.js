import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/Admin'
import Nei from '@/components/Nei'
import Name from '@/components/Name'
import Body from '@/components/Body'
import Renlian from '@/components/Renlian'
import Login from '@/components/Login'
import Zhuemk from '@/components/qitamohai/Zhucemk'
import Userlist from '@/components/user/Userlist'
import List from '@/components/user/List'
import Texts from '@/components/user/Texts'
import List2 from '@/components/user/List2'
import Nrong from '@/components/neirong/Nrong'
import Shouye from '@/components/neirong/Shouye'
import Langjiazai from '@/components/neirong/Langjiazai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'List',
      component: List,
      children:[
        {
          path: '/nrong',
          name: 'Nrong',
          component: Nrong
          // component: resolve => require(['@/components/neirong/Nrong'],resolve)
        },
        {
          path: '/list',
          name: 'Shouye',
          component: Shouye
        },
        {
          path: '/langjiazai',
          name: 'Langjiazai',
          component: Langjiazai
        },
      ],
      meta: {
        title:"首页",
        content: 'disable'
      }
    },
    {
      path: '/list2',
      name: 'List2',
      component: List2,
      meta: {
        title:"首页",
        content: 'disable'
      }
    },
    {
      path: '/texts',
      name: 'Texts',
      component: Texts,
      meta: {
        title:"页面",
        content: 'disable2'
      }
    },
    {
      path: '/userlist',
      name: 'Userlist',
      component: Userlist
    },
    {
      path: '/zhuce',
      name: 'Zhuemk',
      component: Zhuemk
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/body',
      name: 'Body',
      component: Body
    },
    {
      path: '/renlian',
      name: 'Renlian',
      component: Renlian
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/name',
      name: 'Name',
      component: Name
    },
    {
      path: '/nei',
      name: 'Nei',
      component: Nei
    }
  ]
})
