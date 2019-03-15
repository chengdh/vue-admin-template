import Vue from 'vue'
import Router from 'vue-router'
import StaffRouterMap from './staff'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
const moduleHome = {
  path: 'module_home',
  component: () => import('@/views/module_home/index'),
  name: 'module_home',
  props: true,
  // redirect: { name: 'module_list' },
  meta: {
    title: '模块-首页',
    breadcrumb: true
  },

  children: [
    {
      path: 'module_list',
      name: 'module_list',
      props: true,
      component: () => import('@/views/module_home/module_list'),
      meta: {
        title: '模块-首页',
        breadcrumb: false
      }
    },
    StaffRouterMap
  ]
}

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  // { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: { name: 'home_index' },
    name: 'home',
    hidden: true,
    meta: {
      title: '首页',
      breadcrumb: true
    },
    children: [
      {
        name: 'home_index',
        path: 'home',
        component: () => import('@/views/home/index')
      },
      moduleHome
    ]
  }
]

const router = new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
// router.addRoutes([StaffRouterMap]);
// const path_404 = { path: '*', redirect: '/404', hidden: true }

// router.addRoutes([path_404])
export default router
