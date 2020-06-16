import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login')
  },
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
    redirect: '/News/Home',
    // meta: { login_require: true, title: '知乎日报' },
    children: [
      {
        path: 'Home',
        component: () => import('../views/News/Home.vue'),
        meta: { login_require: true, title: '知乎日报', keepAlive: true }
      },
      {
        path: 'Detail/:id',
        name: 'Detail',
        component: () => import('../views/News/Detail.vue'),
        meta: { login_require: true, title: '知乎日报' }
      }
    ]
  },
  {
    path: '/Douyin',
    component: Layout,
    redirect: '/Douyin/',
    children: [
      {
        path: '/',
        component: () => import('../views/Douyin'),
        meta: { login_require: true, title: '抖音' }
      }
    ]
  },
  {
    path: '/Journal',
    component: Layout,
    redirect: '/Journal/Home',
    children: [
      {
        path: 'Home',
        component: () => import('../views/Journal/Home.vue'),
        meta: { login_require: true, title: '钉钉日志' }
      },
      {
        path: 'Handle',
        component: () => import('../views/Journal/Handle.vue'),
        meta: { login_require: true, title: '钉钉日志' }
      }
    ]
  },
  { path: '*', redirect: '/error/404', hidden: true }
]

const router = new VueRouter({
  routes
})

router.beforeEach(function (to, from, next) {
  // console.log(to.matched)
  if (to.meta.login_require) {
    if (sessionStorage.getItem('loginusername')) {
      next()
    } else {
      next('/Login')
    }
  } else {
    next()
  }
})
export default router
