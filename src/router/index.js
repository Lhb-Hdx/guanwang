import {
  createRouter as _createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [{
  path: '/',
  name: 'PageView',
  redirect: '/home',
  component: () => import('@/view/PageView.vue'),
  children: [{
      path: '/home',
      name: 'Home',
      component: () => import('@/view/HomePage.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/articleDetails',
      name: 'articleDetails',
      component: () => import('@/view/articleDetails.vue'),
      meta: {
        title: '泛予动态'
      }
    },
    {
      path: '/InformationDetails',
      name: 'InformationDetails',
      component: () => import('@/view/InformationDetails.vue'),
      meta: {
        title: '资讯详情'
      }
    },
    {
      path: '/productClassification',
      name: 'productClassification',
      component: () => import('@/view/productClassification/cloudBroadcasting.vue'),
      meta: {
        title: '产品分类'
      }
    },
    {
      path: '/productDetails',
      name: 'productDetails',
      component: () => import('@/view/productClassification/productDetails.vue'),
      meta: {
        title: '产品详情'
      }
    },
    {
      path: '/emergencyPlan',
      name: 'emergencyPlan',
      component: () => import('@/view/emergencyPlan/emergencyPlan.vue'),
      redirect: '',
      meta: {
        title: '应用方案'
      }
    },
    {
      path: '/serviceSupport',
      name: 'serviceSupport',
      component: () => import('@/view/serviceSupport/afterSalesPolicy.vue'),
      meta: {
        title: '服务支持'
      },
      children: []
    },
    {
      path: '/aboutFanYu',
      name: 'aboutFanYu',
      component: () => import('@/view/aboutFanYu/companyIntroduction.vue'),
      meta: {
        title: '关于泛予'
      },
      children: []
    }
  ]
}]

export function createRouter() {
  return _createRouter({
    history: createWebHashHistory(),
    routes
  })
}
