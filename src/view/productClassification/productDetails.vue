<template>
  <div class="">
    <div class="sub_banner">
      <img src="@/assets/img/technology.jpg" mode="widthfix">
      <div class="tit">
        <span>商品详情</span>
        <p></p>
      </div>
    </div>
    <div class="page_box">
      <div class="box1">
        <div class="left">
          <swiper ref="thumbsRef" :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
            class="mySwiper2" :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }">
            <swiper-slide class="childSwiper" v-for="(item, index) of img" :key="index"> <img class="img"
                :src="getImgUrl(item)" />
            </swiper-slide>
          </swiper>
          <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="5" :freeMode="true"
            :watchSlidesProgress="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(item, index) of img" :key="index" class="childSwiper">
              <div @click="handleThumbnailClick(index)" class="my-div">
                <img class="img" :src="getImgUrl(item)" :class="index === borColor ? 'redBorder' : 'balBorder'" />
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-next" @click="advance(e)"></div>
          <div class="swiper-button-prev" @click="backward"></div>

        </div>
        <div class="right">
          <div class="title">{{ title }}</div>
          <div>产品简介</div>
          <div class="tel">400-400-4000</div>
        </div>
      </div>
      <div class="box2">
        <h3>产品介绍</h3>
        <div class="hd">
          <ul>
            <li @click="mouseOverFunction(1)" :class="showLi === 1 ? 'box-color' : ''">产品简介</li>
            <li @click="mouseOverFunction(2)" :class="showLi === 2 ? 'box-color' : ''">产品详情</li>
            <li @click="mouseOverFunction(3)" :class="showLi === 3 ? 'box-color' : ''">产品参数</li>
          </ul>
        </div>
        <div class="bd">
          <div class="content">
            <div class="formatted-text text" v-if="showLi === 1">
              {{ introduction || '暂无内容' }}
            </div>
            <div class="formatted-text text" v-if="showLi === 2">
              {{ details || '暂无内容' }}
            </div>
            <div class="formatted-text text" v-if="showLi === 3">
              {{ parameters || '暂无内容' }}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const name = 'productDetails'
import { ref, reactive, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useRouter } from 'vue-router'

import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import 'swiper/css/autoplay'
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs, Scrollbar } from 'swiper'
const modules = [Autoplay, FreeMode, Thumbs, Scrollbar, Navigation, Pagination]




// 初始化数据
// 产品类型和编号 link=1 云广播 link=2 前端产品 link=3 主机及服务器
import describe from '@/view/data-statistical/params'
const router = useRouter()
const title = ref('')
const introduction = ref('') // 简介
const details = ref('') // 详情
const parameters = ref('') // 参数
const img = ref([]) // 图片

onMounted(() => {
  GoTop()
  const link = router.currentRoute.value.query.link;
  const number = router.currentRoute.value.query.number;
  const val = describe.statementType[+link].statement[number - 1]
  title.value = val.label
  // 简介
  introduction.value = val.productIntroduction
  // 详情
  details.value = val.productDetails
  // 参数
  parameters.value = val.ProductParameters
  // 图片
  img.value.push(val.img)
})

function GoTop () {
  (function smoothscroll () {
    var currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop
    if (currentScroll > 535) {
      window.requestAnimationFrame(smoothscroll)
      window.scrollTo(0, currentScroll - currentScroll / 10)
    }
  })()
}

// 动态导入图片
const getImgUrl = (src) => {
  return new URL(`../../assets/img/${src}.png`, import.meta.url).href;
};

// 点击缩略图
let borColor = ref(0)
function handleThumbnailClick (num) {
  borColor.value = num
}
// 点击下一张
function advance () {
  borColor.value++
}
// 点击上一张
function backward () {
  borColor.value--
}

// 初始化
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const TitleData = reactive([
  { name: '云广播', link: 1 },
  { name: '前端产品', link: 2 },
  { name: '主机及服务器', link: 3 }
])

// 点击事件
let link = ref(1)
function onClick (num) {
  link.value = num
}

// 鼠标移入事件
let showLi = ref(1)
function mouseOverFunction (num) {
  showLi.value = num
}

</script>

<style scoped lang="less">
.formatted-text {
  white-space: pre-line;
  /* 使用pre-line值来解释换行符 */
}

.sub_banner {
  width: 100%;
  height: 330px;
  position: relative;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .tit {
    color: #fff;
    position: absolute;
    left: 200px;
    top: 80px;
    width: 1200px;

    span {
      font-weight: 200;
      font-size: 30px;
    }

    p {
      margin-top: 10px;
      font-weight: 200;
      font-size: 16px;
    }
  }
}

.page_box {
  width: 100%;
  height: 100%;
  padding: 100px 0;
  background-color: rgb(248, 248, 248);
}

.redBorder {
  border: 1px solid red;
}

.balBorder {
  border: 1px solid transparent;
}

.box1 {
  width: 1200px;
  height: 400px;
  margin: 0 auto;
  background-color: #fff;

  padding: 40px;

  .left {
    width: 450px;
    height: 255px;
    position: relative;
    float: left;
    background-color: #fff;
    border: 1px solid rgb(221, 221, 221);

    .swiper-button-next,
    .swiper-button-prev {
      top: 50% !important;
      transform: translateY(-50%) !important;
      width: 37px;
      height: 57px;
      margin-top: 0 !important;
      border-radius: 8px;
      color: rgb(121, 118, 118);
      font-weight: bold;
      background-color: rgba(0, 0, 0, 0.2);

      &::after {
        font-size: 2rem;
      }
    }

    .mySwiper2 {
      width: 250px;
      height: 250px;

      .childSwiper {
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


    }

    .mySwiper {
      width: 450px;
      height: 80px;
      position: absolute;
      right: 0px;
      bottom: -90px;

      .my-div {
        width: 80px;
        height: 80px;
        overflow: hidden;
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

    }

    .img-box {
      margin: 0 auto;
      width: 255px;
      height: 255px;

      img {
        width: auto;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .right {
    width: 560px;
    height: 255px;
    float: right;
    width: calc(100% - 561px);
    margin-right: 50px;
    position: relative;

    .title {
      font-size: 30px;
      padding-top: 0;
      padding-bottom: 12px;
    }

    .tel {
      display: block;
      width: 250px;
      height: 45px;
      text-align: center;
      color: #fff;
      background: #1478be;
      font-size: 18px;
      cursor: pointer;
      line-height: 45px;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

}

.box2 {
  padding: 50px 100px 100px;
  width: 1200px;
  margin: 50px auto 100px;
  background-color: #fff;

  h3 {
    font-size: 36px;
    padding-bottom: 45px;
  }

  .hd {
    margin-bottom: 33px;

    ul {
      li:first-child {
        border-left: 1px solid #ddd;
      }

      li:hover {
        background-color: rgb(20, 120, 190);
        color: #fff;
      }

      .box-color {
        background-color: rgb(20, 120, 190);
        color: #fff;
      }

      li {
        float: left;
        width: 150px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-right: 1px solid #ddd;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }

  .bd {
    margin-top: 100px;

    .content {
      .text {
        font-size: 16px;
        line-height: 2;
      }

      .summary {
        .img-box {
          margin: 0 auto;
          width: 255px;
          height: 255px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;

          }
        }
      }
    }
  }
}
</style>

