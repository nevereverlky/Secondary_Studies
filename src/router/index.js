import Vue from 'vue'
import Router from 'vue-router'
// import request from '../utils/request'
// import _this from './../main.js'

import Index from '@/views/Index.vue'
import activityInquiry from '@/components/ActivityManage/activityInquiry'
import activityApproval from '@/components/ActivityManage/activityApproval'
import activityChapter from '@/components/ActivityManage/activityChapter'
import chapterInout from '@/components/ActivityManage/chapterInout'
import Authorization from '@/components/ActivityManage/Authorization'
import InformationEntry from '@/components/InformationEntry'
import OverallView from '@/components/OverallView'
import userInfo from '@/components/userInfo'
import EditPassword from '@/components/EditPassword'
// const Index = () => import('../views/Index.vue')
const Signin = () => import('../views/Signin.vue')
// const activityApproval = () => import('../components/ActivityManage/activityApproval')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/signin'
    },
    {
      path: '/signin',
      component: Signin
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      redirect: '/overallview',
      children: [
        {
          path: '/activityinquiry',
          name: 'activityInquiry',
          component: activityInquiry
        },
        {
          path: '/activityapproval',
          name: 'activityApproval',
          component: activityApproval
        },
        {
          path: '/activitychapter',
          name: 'activityChapter',
          component: activityChapter
        },
        {
          path: '/chapterinout',
          name: 'chapterInout',
          component: chapterInout
        },
        {
          path: '/authorization',
          name: 'Authorization',
          component: Authorization
        },
        {
          path: '/informationentry',
          name: 'InformationEntry',
          component: InformationEntry
        },
        {
          path: '/overallview',
          name: 'OverallView',
          component: OverallView
        },
        {
          path: '/userInfo',
          name: 'userInfo',
          component: userInfo
        },
        {
          path: '/EditPassword',
          name: 'EditPassword',
          component: EditPassword
        }
      ]
    }
  ]
})

// // 全局路由守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/signin') {
//     // next();
//     // request.localStorageSet('token',null)
//     let token = request.localStorageGet('token');
//     console.log(token)
//     if (!token) {
//       next();
//     } else {
//       next('index');
//       request.message(_this, '您已登陆', 'warning')
//     }
//   } else {
//     let token = request.localStorageGet('token');
//     console.log(token)
//     if (!token) {
//       // next('/signin');
//       next({
//         path: '/signin',
//         query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//       request.message(_this, '请先登陆' ,'warning')
//     } else {
//       next()
//     }
//   }
// })

export default router
