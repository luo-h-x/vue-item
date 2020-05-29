import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/Login',
  //   name: 'Login',
  //   component: () => import('../views/Login')
  // },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/Home',
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: () => import('../views/Home'),
        meta: { login_require: true, title: '首页' }
      }
    ]
  },
  // {
  //   path: '/Data',
  //   name: 'Data',
  //   component: Home,
  //   redirect: '/Data/Tree',
  //   meta: { title: '数据' },
  //   children: [
  //     {
  //       path: 'Table',
  //       name: 'Table',
  //       component: () => import('../views/Table'),
  //       meta: { login_require: true, title: 'Table表格' }
  //     },
  //     {
  //       path: 'Tree',
  //       name: 'Tree',
  //       component: () => import('../views/Tree'),
  //       meta: { login_require: true, title: 'Tree树形控件' }
  //     }
  //   ]
  // },
  {
    path: '/error',
    component: Layout,
    children: [
      {
        path: '404',
        component: () => import('../views/404'),
        meta: { login_require: true, title: '错误页面' }
      }
    ]
  },
  {
    path: '/Element',
    component: Layout,
    meta: { title: 'ElementUI' },
    children: [
      {
        path: 'Icon',
        component: () => import('../views/ElementUI/Icon'),
        meta: { login_require: true, title: 'Icon图标' }
      },
      {
        path: 'From',
        component: () => import('../views/ElementUI/From'),
        meta: { login_require: true, title: 'From表单' }
      },
      {
        path: 'Data',
        component: () => import('../views/ElementUI/Data'),
        meta: { title: '数据' },
        children: [
          {
            path: 'Table',
            component: () => import('../views/ElementUI/Data/Table'),
            meta: { login_require: true, title: 'Table表格' }
          },
          {
            path: 'Tree',
            component: () => import('../views/ElementUI/Data/Tree'),
            meta: { login_require: true, title: 'Tree树形控件' }
          }
        ]
      }
    ]
  },
  {
    path: '/News',
    component: Layout,
    children: [
      {
        path: 'Home',
        component: () => import('../views/News/Home.vue'),
        meta: { login_require: true, title: '知乎日报' }
      }
    ]
  }
  // { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  routes
})

// router.beforeEach(function (to, from, next) {
//   // console.log(to.matched)
//   if (to.meta.login_require) {
//     if (sessionStorage.getItem('loginusername')) {
//       next()
//     } else {
//       next('/Login')
//     }
//   } else {
//     next()
//   }
// })
export default router
