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
      path: '/productDetails',
      name: 'productDetails',
      component: () => import('@/view/productDetails.vue'),
      meta: {
        title: '产品详情'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/view/HomePage.vue'),
      meta: {
        title: '首页'
      }
    },

    {
      path: '/productClassification',
      name: 'productClassification',
      component: () => import('@/view/productClassification/cloudBroadcasting.vue'),
      redirect: '/productClassification/cloudBroadcasting',
      meta: {
        title: '软件产品'
      }
    },
    {
      path: '/productClassification/cloudBroadcasting',
      name: 'cloudBroadcasting',
      component: () => import('@/view/productClassification/cloudBroadcasting.vue'),
      meta: {
        title: '云广播'
      }
    },
    {
      path: '/productClassification/frontendProducts',
      name: 'frontendProducts',
      component: () => import('@/view/productClassification/frontendProducts.vue'),
      meta: {
        title: '前端产品'
      }
    },
    {
      path: '/productClassification/hosAndServer',
      name: 'hosAndServer',
      component: () => import('@/view/productClassification/hosAndServer.vue'),
      meta: {
        title: '主机及服务器'
      }
    },
    {
      path: '/productClassification/softwarePlatform',
      name: 'softwarePlatform',
      component: () => import('@/view/productClassification/softwarePlatform.vue'),
      meta: {
        title: '软件平台'
      }
    },
    {
      path: '/emergencyPlan',
      name: 'emergencyPlan',
      component: () => import('@/view/emergencyPlan/emergencyPlan.vue'),
      redirect: '',
      meta: {
        title: '应急方案'
      },
      children: [{
          path: '/emergency',
          name: 'emergency',
          component: () => import('@/view/emergencyPlan/emergency.vue'),
          meta: {
            title: '应急'
          }
        },
        {
          path: '/campus',
          name: 'campus',
          component: () => import('@/view/emergencyPlan/campus.vue'),
          meta: {
            title: '校园'
          }
        },
        {
          path: '/park',
          name: 'park',
          component: () => import('@/view/emergencyPlan/park.vue'),
          meta: {
            title: '园区'
          }
        },
        {
          path: '/shops',
          name: 'shops',
          component: () => import('@/view/emergencyPlan/shops.vue'),
          meta: {
            title: '商铺'
          }
        },
        {
          path: '/scenicSpot',
          name: 'scenicSpot',
          component: () => import('@/view/emergencyPlan/scenicSpot.vue'),
          meta: {
            title: '景区'
          }
        },
        {
          path: '/countryside',
          name: 'countryside',
          component: () => import('@/view/emergencyPlan/countryside.vue'),
          meta: {
            title: '农村'
          }
        },
      ]
    },

    {
      path: '/serviceSupport',
      name: 'serviceSupport',
      component: () => import('@/view/serviceSupport/afterSalesPolicy.vue'),
      redirect: '/serviceSupport/afterSalesPolicy',
      meta: {
        title: '服务支持'
      },
      children: []
    },
    {
      path: '/serviceSupport/afterSalesPolicy',
      name: 'afterSalesPolicy',
      component: () => import('@/view/serviceSupport/afterSalesPolicy.vue'),
      meta: {
        title: '售后指南'
      }
    },
    {
      path: '/serviceSupport/operationGuide',
      name: 'operationGuide',
      component: () => import('@/view/serviceSupport/operationGuide.vue'),
      meta: {
        title: '操作指南'
      }
    },
    {
      path: '/serviceSupport/contactInformation',
      name: 'contactInformation',
      component: () => import('@/view/serviceSupport/contactInformation.vue'),
      meta: {
        title: '联系方式'
      }
    },
    {
      path: '/aboutFanYu',
      name: 'aboutFanYu',
      component: () => import('@/view/aboutFanYu/companyIntroduction.vue'),
      redirect: '/aboutFanYu/companyIntroduction',
      meta: {
        title: '关于泛予'
      },
      children: []
    },
    {
      path: '/aboutFanYu/companyIntroduction',
      name: 'companyIntroduction',
      component: () => import('@/view/aboutFanYu/companyIntroduction.vue'),
      meta: {
        title: '售后指南'
      }
    },
    {
      path: '/aboutFanYu/developmentHistory',
      name: 'developmentHistory',
      component: () => import('@/view/aboutFanYu/developmentHistory.vue'),
      meta: {
        title: '操作指南'
      }
    },
    {
      path: '/aboutFanYu/honoraryQualifications',
      name: 'honoraryQualifications',
      component: () => import('@/view/aboutFanYu/honoraryQualifications.vue'),
      meta: {
        title: '联系方式'
      }
    },
    {
      path: '/aboutFanYu/socialResponsibility',
      name: 'socialResponsibility',
      component: () => import('@/view/aboutFanYu/socialResponsibility.vue'),
      meta: {
        title: '联系方式'
      }
    },
    {
      path: '/aboutFanYu/contactInformation',
      name: 'contactInformation',
      component: () => import('@/view/aboutFanYu/contactInformation.vue'),
      meta: {
        title: '联系方式'
      }
    }
  ]
}]

export function createRouter() {
  return _createRouter({
    history: createWebHashHistory(),
    routes
  })
}
