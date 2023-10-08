<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <swiper id="swiper" :modules="modules" :slides-per-view="1" :space-between="0" navigation lazy loop autoplay
      :pagination="{
        clickable: true
      }">
      <swiper-slide class="banner-swiper" v-for="(item, index) in swiperList" :key="index">
        <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
        <div class="swiper-lazy-preloader"></div>
        <div class="swiper-slide-title">
          <h1>{{ item.title }}</h1>
          <p>{{ item.content }}</p>
        </div>
      </swiper-slide>
    </swiper>

    <!-- 公司使命 -->
    <div id="bigData" class="container-fuild">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img class="img-responsive" src="@/assets/img/img1.png" alt="公司使命、愿景" />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h2 class="bigData-title">公司使命、愿景<small>/ MISSION</small></h2>
          <p>公司愿景：让每个产品插上信息的翅膀</p>
          <p>公司使命：聚焦客户最关切的需求，提供有竞争力的物联网产品及服务，持续为客户创造价值。</p>
          <p>公司价值观：成就客户、持续创新、追求卓越、诚实守信</p>
        </div>
      </div>
    </div>
    <!-- 您身边的IT专家 -->
    <div id="contactUs" class="container-fuild text-center">
      <div class="container contactUs-container wow slideInUp">
        <h1>您身边的智联专家</h1>
        <h3>7x24小时提供出色的服务</h3>
        <button class="btn btn-default btn-sm"
          onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#3f3f3f';"
          onmouseenter="this.style.backgroundColor='transparent'; this.style.borderColor='#ffffff'; this.style.color='#ffffff';">
          联系我们
        </button>
      </div>
    </div>
    <!-- 新闻资讯 -->
    <div id="new" class="container-fuild">
      <div class="new-box">
        <div class="title">
          <div class="left">泛予动态</div>
          <div class="right">
            <a :href="generateArticleLink('articleDetails', 1, 1)" target="_blank">了解更多
              <i class="icon"></i>
            </a>
          </div>
        </div>
        <div class="new-text">
          <div class="left">
            <div class="left-box">
              <a :href="generateArticleLink('InformationDetails', 1, 1)" target="_blank">
                <div class="a1">
                  <img class="image" src="@/assets/img/aa.jpg">
                  <span class="subscript">公司新闻</span>
                </div>
                <div class="a2">
                  <h3>文章标题</h3>
                  <p>
                    文章内容
                  </p>
                  <span>发布日期</span>
                </div>
              </a>
            </div>
            <div class="left-box">
              <a :href="generateArticleLink('InformationDetails', 1, 1)" target="_blank">
                <div class="a1">
                  <img class="image" src="@/assets/img/aa.jpg">
                  <span class="subscript">公司新闻</span>
                </div>
                <div class="a2">
                  <h3>文章标题</h3>
                  <p>
                    文章内容
                  </p>
                  <span>发布日期</span>
                </div>
              </a>
            </div>
          </div>
          <div class="right">
            <span class="subscript">行业资讯</span>
            <ul>
              <li class="clearfix">
                <a :href="generateArticleLink('InformationDetails', 2, 1)" target="_blank">
                  <span class="fl">
                    <h3 class="date">14</h3>
                    <p>2023-09</p>
                  </span>
                  <span class="fr">
                    文章标题
                    <i class="icon"></i>
                  </span>
                </a>
              </li>
              <li class="clearfix">
                <a :href="generateArticleLink('InformationDetails', 2, 1)" target="_blank">
                  <span class="fl">
                    <h3 class="date">14</h3>
                    <p>2023-09</p>
                  </span>
                  <span class="fr">
                    文章标题
                    <i class="icon"></i>
                  </span>
                </a>
              </li>
              <li class="clearfix">
                <a :href="generateArticleLink('InformationDetails', 2, 1)" target="_blank">
                  <span class="fl">
                    <h3 class="date">14</h3>
                    <p>2023-09</p>
                  </span>
                  <span class="fr">
                    文章标题
                    <i class="icon"></i>
                  </span>
                </a>
              </li>
              <li class="clearfix">
                <a :href="generateArticleLink('InformationDetails', 2, 1)" target="_blank">
                  <span class="fl">
                    <h3 class="date">14</h3>
                    <p>2023-09</p>
                  </span>
                  <span class="fr">
                    文章标题
                    <i class="icon"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 合作伙伴生态 -->
    <div class="life_main">
      <div class="body">
        <div class="title">合作伙伴</div>

        <ul>
          <li class="item" v-for="(item, index) in customerList" :key="index">
            <div class="img-box">
              <img :src=item.logo>
            </div>
            <div class="txt">{{ item.title }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup name="HomePage">
import WOW from 'wow.js'
import { getCurrentInstance, onMounted } from 'vue'
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/lazy'
import 'swiper/css/autoplay'

import banner1 from '@/assets/img/banner1.png'
import banner2 from '@/assets/img/banner2.jpg'

import dianxin from '@/assets/img/dianxin.jpg'
import liantong from '@/assets/img/liantong.png'
import yidong from '@/assets/img/yidong.jpg'
import junzheng from '@/assets/img/junzheng.jpg'
import quectel from '@/assets/img/quectel.png'
import tianyi from '@/assets/img/tianyi.jpg'
import tietong from '@/assets/img/tietong.jpg'
import zhongche from '@/assets/img/zhongche.jpg'

import img_computer from '@/assets/img/computer.png'
import { useRoute } from 'vue-router';
const router = useRoute();
const swiperList = [
  {
    img: banner1,
    title: '',
    content: ''
  },
  {
    img: banner2,
    title: '',
    content: ''
  },
  {
    img: banner1,
    title: '',
    content: ''
  },
  {
    img: banner2,
    title: '',
    content: ''
  }
]

const modules = [Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay]

const customerList = [
  {
    logo: dianxin,
    title:
      '中国电信',
    content:
      '公司'
  },
  {
    logo: liantong,
    title:
      '中国联通',
    content:
      '公司'
  },
  {
    logo: yidong,
    title:
      '中国移动',
    content:
      '公司'
  },
  {
    logo: junzheng,
    title:
      '君正科技',
    content:
      '公司'
  },
  {
    logo: quectel,
    title:
      'QUECTEL ',
    content:
      '公司'
  },
  {
    logo: tianyi,
    title:
      '天翼物联',
    content:
      '公司'
  },
  {
    logo: tietong,
    title:
      '中国铁通',
    content:
      '公司'
  },
  {
    logo: zhongche,
    title:
      '中国中车',
    content:
      '公司'
  }
]

const serverList = [
  {
    logo: img_computer,
    title: '主体信息',
    content: '<p>123</p>123'
  },
  {
    logo: img_computer,
    title: '网站信息',
    content: '<p>123</p>123'
  },
  {
    logo: img_computer,
    title: '负责人信息',
    content: '<p>123</p>123'
  },
  {
    logo: img_computer,
    title: '域名信息',
    content: '<p>123</p>123'
  }
]

// const { proxy } = getCurrentInstance() //获取上下文实例，ctx=vue2的this
onMounted(() => {
  /* wowjs动画 */
  new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  }).init()
})

function generateArticleLink (data, id, val) {
  // 构建目标路由的 URL，携带参数
  return `/#/${data}?id=${id}&val=${val}`;
}










</script>

<style scoped lang="less">
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 顶部轮播图 */
#swiper {
  width: 100%;
  height: 600px;

  .banner-swiper {
    width: 100%;
    height: 100%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    .swiper-slide-title {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999999999;
      width: 100%;
      height: 100%;
      color: #fff;
      background: rgba(51, 51, 51, 0.534);
      text-align: center;
      line-height: 80px;
    }

    .swiper-slide-title>h1 {
      font-size: 50px;
      margin-top: 12%;
    }

    .swiper-slide-title>p {
      font-size: 20px;
      margin-top: 1%;
      font-weight: 700;
    }
  }
}


/* 大数据管理系统 */
#bigData {
  padding: 100px;
  transition: all ease 0.6s;
  box-sizing: border-box;

  .bigData-title {
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }

  p {
    font-size: 14px;
    color: #333;
    line-height: 2rem;
  }

  .bigData-device {
    margin: 50px 0 20px;
  }
}

/* 您身边的IT专家 */
#contactUs {
  color: #fff;
  height: 400px;
  background: url('../assets/img/contact_us_bg.jpg') 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;

  .contactUs-container {
    padding-top: 50px;

    button {
      width: 300px;
      height: 50px;
      margin-top: 40px;
    }

    .contactUs-contactWay span {
      display: inline-block;
      width: 48px;
      height: 48px;
      margin: 30px;
    }

    .contactUs-contactWay span:nth-of-type(1) {
      background: url('../assets/img/weixin.png') 0 0 no-repeat;
      background-size: 100% 100%;
    }

    .contactUs-contactWay span:nth-of-type(2) {
      background: url('../assets/img/weibo.png') 0 0 no-repeat;
      background-size: 100% 100%;
    }

    .contactUs-contactWay span:nth-of-type(3) {
      background: url('../assets/img/twitter.png') 0 0 no-repeat;
      background-size: 100% 100%;
    }
  }
}

/* 新闻资讯 */
.new-box {
  width: 100%;
  height: 660px;
  background-color: #fff;
  padding: 0 191.5px;

  .title {
    width: 1200px;
    padding: 70px 0 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      font-size: 45px;
      font-weight: bold;
      line-height: 60px;
    }

    .right {
      a {
        display: block;
        width: 178px;
        line-height: 48px;
        height: 48px;
        text-align: center;
        border: 1px solid #9fa5b2;
        border-radius: 24px;
        font-size: 18px;
        color: #3c404b;
        margin-top: 4px;
        text-decoration: none;
        color: #333;
      }

      a:hover {
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .new-text {
    width: 1200px;
    display: flex;

    .subscript {
      display: block;
      width: 110px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 0 0 10px 0;
    }

    .left {
      width: 731px;
      height: 490px;
      margin-left: 15px;
      display: flex;

      .left-box {
        width: 355px;
        margin: 0 0px;
        margin-right: 20px;

        a {
          color: #333;
          text-decoration: none;
        }

        .a1 {
          display: block;
          width: 100%;
          height: 300px;
          overflow: hidden;
          position: relative;
          border-radius: 10px 10px 0 0;

          .image {
            margin-left: -22px;
          }
        }

        .a2 {
          padding: 10px 27px 25px;
          display: block;
          background-color: rgb(238, 242, 246);
          border-radius: 0 0 10px 10px;

          h3 {
            font-size: 22px;
            font-weight: bold;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          p {
            line-height: 22px;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            word-wrap: break-word;
            white-space: normal !important;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            height: 44px;
            overflow: hidden;
          }

          span {
            font-size: 15px;
            color: #666;
          }
        }
      }
    }

    .right {
      padding: 40px 20px 0;
      width: 420px;
      height: 470px;
      background: #eef2f6;
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      margin-left: 20px;

      ul {
        margin-bottom: 10px;

        li {
          padding-top: 24px;
          margin-bottom: 24px;
          height: 80px;

          a:visited {
            color: #333;
            text-decoration: none;
            cursor: pointer;
          }

          a {

            .fl {
              float: left;
              margin-left: 15px;

              h3 {
                padding: 0;
                margin: 0;
                font-size: 45px;
                line-height: 45px;
              }

              p {
                font-size: 14px;
              }
            }

            .fr {
              padding-right: 20px;
              width: 288px;
              font-size: 18px;
              position: relative;
              line-height: 32px;
              float: right;
              display: -webkit-box;
              overflow: hidden;
              text-overflow: ellipsis;
              word-wrap: break-word;
              white-space: normal !important;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }

          a::after {
            visibility: hidden;
            display: block;
            font-size: 0;
            content: " ";
            clear: both;
            height: 0;
          }
        }
      }
    }
  }
}

/* 合作伙伴生态 */
.life_main {
  padding-bottom: 100px;
  padding-top: 50px;

  .body {
    width: 1200px;
    margin: 0 auto;

    .title {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 30px;
    }

    li:hover {
      .txt {
        font-weight: bold;
        color: rgb(20, 120, 190);
      }

      img {
        transform: scale(1.1);
        transition: transform 0.3s ease;
      }

      box-shadow: 8px 10px 4px rgba(0, 0, 0, 0.2);
    }

    li {
      cursor: pointer;
      border: 1px solid rgb(188, 184, 184);
      position: relative;
      float: left;
      width: 23%;
      margin-bottom: 50px;
      margin-left: 1%;
      margin-right: 1%;
      background: #fff;
      transition: all ease 0.36s;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;
      position: relative;

      .img-box {
        width: 282px;
        height: 158px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          display: block;
        }
      }

      .txt {
        background: #fff;
        height: 83px;
        line-height: 83px;
        font-size: 16px;
        position: relative;
        color: #666;
        transition: ease-in-out 0.2s;
        overflow: hidden;
        padding: 0 25px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

}
</style>

