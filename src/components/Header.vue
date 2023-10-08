<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 头部顶部 -->
    <!-- <div class="header-top container-fuild hidden-xs">
      <div class="container">
        <div class="server pull-left">
          <span class="glyphicon glyphicon-earphone"></span> 服务电话：{{ phone }}
          <span class="glyphicon glyphicon-envelope"></span> 邮箱：{{ email }}
        </div>
        <div class="shejiao pull-right">
          7x24小时为您服务
        </div>
      </div>
    </div> -->
    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs">
      <!-- 导航logo -->
      <div @click="goHomePage" class="header-nav-logo">
        <img src="@/assets/img/logo.png" />
        <!-- <div class="header-nav-name">泛予智联</div> -->

      </div>

      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li v-for="(item, index) in navList" :key="index" :class="index == navIndex ? 'active' : ''"
          @click="navClick(index, item.name)">
          <router-link :to="item.path">
            {{ item.name }}
            <!-- <span v-if="item.children.length > 0" class="glyphicon glyphicon-menu-down"></span> -->
            <i class="underline"></i>
          </router-link>
          <!-- <div v-if="item.children.length > 0">
            <div v-for="(i, n) in item.children" @click="navigateToHome(i.path)" :key="n">
              <div>
                {{ i.name }}
              </div>
            </div>
          </div> -->
        </li>
      </ul>
      <!-- <div class="glyphicon glyphicon-earphone"></div> 服务电话：{{ phone }} -->
    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img class="center-block" src="@/assets/img/favicon2.png" alt="logo" />
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{ menuName }}
        <div class="header-nav-m-menu-wrapper" data-toggle="collapse" data-target="#menu" @click="menuClick">
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li v-for="(item, index) in navList" :key="index" :class="index == navIndex ? 'active' : ''"
            @click="navClick(index, item.name)" data-toggle="collapse" data-target="#menu">
            <router-link :to="item.path">
              {{ item.name }}
              <i class="underline"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="glyphicon glyphicon-earphone"> 服务电话：133-0296-4863</div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'
const phone = import.meta.env.VITE_APP_PHONE
const email = import.meta.env.VITE_APP_EMAIL
import { useRouter } from 'vue-router';

const cxt = getCurrentInstance()
const bus = cxt.appContext.config.globalProperties.$bus
onMounted(() => {
  bus.on('printMessage', (index) => {
    navClick(index)
  })
})
onBeforeUnmount(() => {
  bus.off('printMessage')
})

const navIndex = ref('')
navIndex.value = sessionStorage.getItem('navIndex')
  ? sessionStorage.getItem('navIndex')
  : 0
const menuName = ref('首页')
const menuClass = ref('glyphicon glyphicon-menu-down')

const navList = [
  {
    name: '首页',
    path: '/home',
    children: []
  },
  {
    name: '产品分类',
    path: '/productClassification',
    children: [
      {
        name: '云广播',
        path: '/productClassification/cloudBroadcasting'
      },
      {
        name: '前端产品',
        path: '/productClassification/frontendProducts'
      },
      {
        name: '主机及服务器',
        path: '/productClassification/hosAndServer'
      },
      {
        name: '软件平台',
        path: '/productClassification/softwarePlatform'
      }
    ]
  },
  {
    name: '应用方案',
    path: '/emergencyPlan',
    children: [
      {
        name: '应急',
        path: '/emergencyPlan/emergency'
      },
      {
        name: '校园',
        path: '/emergencyPlan/campus'
      },
      {
        name: '园区',
        path: '/emergencyPlan/park'
      },
      {
        name: '商铺',
        path: '/emergencyPlan/shops'
      },
      {
        name: '景区',
        path: '/emergencyPlan/scenicSpot'
      },
      {
        name: '农村',
        path: '/emergencyPlan/countryside'
      }
    ]
  },
  {
    name: '服务支持',
    path: '/serviceSupport',
    children: [
      {
        name: '售后指南',
        path: '/serviceSupport/afterSalesPolicy'
      },
      {
        name: '操作指南',
        path: '/serviceSupport/operationGuide'
      },
      {
        name: '联系方式',
        path: '/serviceSupport/contactInformation'
      }
    ]
  },
  {
    name: '关于泛予',
    path: '/aboutFanYu',
    children: [
      {
        name: '公司简介',
        path: '/aboutFanYu/companyIntroduction'
      },
      {
        name: '发展历程',
        path: '/aboutFanYu/developmentHistory'
      },
      {
        name: '荣誉资质',
        path: '/aboutFanYu/honoraryQualifications'
      },
      {
        name: '社会责任',
        path: '/aboutFanYu/socialResponsibility'
      },
      {
        name: '联系方式',
        path: '/aboutFanYu/contactInformation'
      }
    ]
  }
]
function navClick (index, name) {
  navIndex.value = index
  sessionStorage.setItem('navIndex', index)
  menuName.value = name
}
function menuClick () {
  if (menuClass.value == 'glyphicon glyphicon-menu-down') {
    menuClass.value = 'glyphicon glyphicon-menu-up'
  } else {
    menuClass.value = 'glyphicon glyphicon-menu-down'
  }
}



const router = useRouter();
function navigateToHome (path) {
  router.push(path)
}
function goHomePage () {
  router.push('/home')
}
</script>

<style scoped lang="less">
/* 顶部 */
#header {
  background: #fff;
  transition: all ease 0.6s;
  position: relative;

  .glyphicon {
    position: absolute;
    right: 90px;
    top: 21px;
    line-height: 40px;
    z-index: 100;
    font-size: 16px;
  }
}

#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  background: #474747;
}

/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}

/* 导航栏 */
#header .header-nav {
  height: 80px;
  position: relative;


}

/* 导航栏logo */
.header-nav-logo {
  width: 50px;
  height: 100%;
  float: left;
  position: relative;
  cursor: pointer;
}

/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  width: 160px;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.header-nav-name {
  width: 100px;
  height: 100%;
  float: left;
  position: relative;
  margin-left: 60px;
  line-height: 80px;
  font-size: 20px;
  font-weight: bold;
}

/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
  margin-bottom: -10px;
}

#header .header-nav .header-nav-wrapper {
  line-height: 80px;
  float: left;
  margin-left: 250px;
  max-width: 800px;
}

/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper>li {
  float: left;
  margin: 0 15px;
  position: relative;
}

/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper>li>a {
  color: #000;
  font-size: 17px;
  /* font-weight: bold; */
  padding: 15px 0;
  position: relative;
}

/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper>li>a>i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: #1e73be;
}

/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper>li>a>span {
  font-size: 12px;
  transition: transform ease 0.5s;
}

/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper>li>a:hover {
  color: #1e73be;
  text-decoration: none;
}

/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper>li>a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}

/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper>li>a:hover span {
  transform: rotate(180deg);
}

/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper>li.active>a {
  color: #1e73be;
  text-decoration: none;
  border-bottom: 2px solid #1e73be;
}

/* 导航栏 每个导航下面的二级导航容器 */
/* #header .header-nav .header-nav-wrapper>li>div {
  display: none;
  flex-wrap: wrap;
  position: absolute;
  width: 1030px;
  top: 80%;
  left: -440px;
  z-index: 999999;
  box-shadow: 0 0 3px 1px #ccc;
  background: rgb(245, 245, 245);
  padding: 15px;
} */
/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper>li>div {
  display: none;
  flex-wrap: wrap;
  position: absolute;
  width: 230px;
  top: 80%;
  z-index: 999999;
  box-shadow: 0 0 3px 1px #ccc;
  background: rgb(245, 245, 245);
  padding: 15px;
}

/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper>li>div>div {
  width: 200px;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  font-size: 15px;
}

/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper>li>div>div>a:hover {
  text-decoration: none;
}

/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper>li:hover div {
  display: block;
  /* display: flex; */
}

#header .header-nav .header-nav-wrapper>li>div>div:hover {
  cursor: pointer;
  color: #fff;
  background: rgb(248, 173, 1);
}




@media screen and (max-width: 997px) {
  #header .header-nav-m {
    position: relative;
  }

  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
  }

  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 45px;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #474747;
    position: relative;
  }

  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 12px;
  }

  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #474747;
    z-index: 9999999;
  }

  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper>li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }

  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper>li>a {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }

  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper>li>a>span {
    font-size: 10px;
  }
}
</style>

