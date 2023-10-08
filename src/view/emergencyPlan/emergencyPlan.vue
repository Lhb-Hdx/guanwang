<style scoped lang="less">
.sub_banner {
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;

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

.case_main {
  width: 1200px;
  margin: 0 auto;

  .title {
    text-align: center;
    font-size: 60px;
    padding-top: 98px;
    padding-bottom: 70px;
  }

  .body1 {
    text-align: left;

    .clearfix {
      width: 1200px;

      .box-color {
        box-shadow: 5px 5px 10px 5px rgba(90, 95, 99, 0.4);

        div {
          border: 2px solid #fff;
        }
      }

      li:hover {
        box-shadow: 5px 5px 10px 5px rgba(90, 95, 99, 0.4);
        cursor: pointer;

        div {
          border: 2px solid #fff;
        }
      }

      li {
        width: 31%;
        margin-right: 1%;
        margin-left: 1%;
        height: 246px;
        float: left;
        border-radius: 16px;
        margin-bottom: 32px;
        position: relative;
        background-size: cover;

        div {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 16px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 16px;

          }

          h3 {
            font-size: 24px;
            position: absolute;
            bottom: 0;
            left: 29px;
            right: 29px;
            line-height: 82px;
            border-top: 1px solid rgba(255, 255, 255, 0.7);
            color: #fff;
          }

          i {
            width: 25px;
            height: 25px;
            background-position: 0 -419px;
            position: absolute;
            right: 0;
            top: 28px;
          }
        }
      }
    }
  }

  .case_1 {
    margin-bottom: 82px;
    padding: 40px;

    .clear {
      clear: both;
    }

    .case_tit {
      margin-bottom: 50px;
      padding-bottom: 20px;
      border-bottom: 1px solid black;

      h3 {
        font-size: 45px;
      }
    }

    .body {
      width: 100%;
      height: 100%;

      .fl {
        width: calc(100% - 860px);
        float: left;
        margin-left: 15px;
        color: #1478be;

        h3 {
          font-size: 40px;
        }
      }

      .fr {
        float: right;
        line-height: 30px;
        font-size: 16px;
        color: #666;
        width: 806px;
        white-space: pre-line;
        padding-top: 60px;
      }
    }
  }

  .case_2 {
    margin-bottom: 30px;

    .case_tit {
      margin-bottom: 50px;

      h3 {
        font-size: 30px;
      }
    }

    .body2 {
      height: 100%;
      padding: 60px;
      border: 2px solid #ddd;
      border-radius: 10px;
      line-height: 34px;
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

  .case_3 {
    margin-bottom: 30px;

    .case_tit {
      margin-bottom: 50px;

      h3 {
        font-size: 30px;
      }
    }

    .clearfix {
      li:hover {
        box-shadow: 5px 5px 10px 5px rgba(90, 95, 99, 0.4);
      }

      li {
        cursor: pointer;
        float: left;
        width: 48%;
        background: url(../../assets/img/case_3.png) no-repeat;
        background-size: cover;
        border-radius: 10px;
        margin-bottom: 46px;
        height: 285px;
        position: relative;

        h3 {
          font-size: 24px;
          padding: 40px 50px 30px;
        }

        p {
          font-size: 16px;
          line-height: 30px;
          color: #666;
          padding: 0 50px;
        }

        i {
          width: 51px;
          height: 44px;
          background-position: -45px -366px;
          position: absolute;
          right: 51px;
        }
      }

      li:nth-child(2n) {
        float: right;
      }
    }
  }

  .audioAndVideos {
    cursor: pointer;
    margin-bottom: 60px;
    background-color: #fff;

    #mySwiper {
      width: 100%;
      border: 1px solid balck;
      height: 550px;

      .swiper-container {
        display: flex;
        justify-content: center;
        align-items: center;

        .image {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          display: block;
        }

        video {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          display: block;
          object-fit: fill;
        }

        .swiper-slide-title {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 99;
          width: 100%;
          height: 100%;
          color: #fff;
          text-align: center;
          line-height: 80px;

          h1 {
            font-size: 50px;
            margin-top: 12%;
          }

          p {
            font-size: 20px;
            margin-top: 38%;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="">
    <div class="sub_banner">
      <img src="@/assets/img/technology.jpg" mode="widthfix">
      <div class="tit">
        <span>应用方案</span>
        <p></p>
      </div>
    </div>
    <div class="case_main">
      <div class="title">场景应用方案</div>
      <div class="body1">
        <ul class="clearfix">
          <li v-for="(item, index) in proposalDocument.scenarioType" :class="showClick === index ? 'box-color' : ''"
            :key="index" @click="toTarget(index, true)">
            <div>
              <img src="../../assets/img/bg.jpg">
              <h3>
                {{ item.name }}
                <i class="icon"></i>
              </h3>
            </div>
          </li>
        </ul>
      </div>
      <div class="case_1" id="target" ref="target">
        <div class="case_tit">
          <h3>{{ moduleName }}</h3>
        </div>
        <div class="body">
          <div class="fl">
            <h3>场景需求</h3>
          </div>
          <div class="fr">
            {{ sceneData }}
          </div>
        </div>
        <div class="clear"></div>

      </div>

      <div class="case_2">
        <div class="case_tit">
          <h3>拓扑图</h3>
        </div>
        <div class="body2">
          <img :src="getImgUrl(topoImgData, 'png')">
        </div>
      </div>

      <div class="case_3">
        <div class="case_tit">
          <h3>方案特点</h3>
        </div>
        <div class="body3">
          <ul class="clearfix">
            <li v-for="(item, index) in programData" :key="index">
              <h3>{{ item.title }}</h3>
              <p>
                {{ item.text }}
              </p>
              <i class="icon"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="audioAndVideos">
        <swiper v-if="cImgData.length > 0" navigation loop autoplay :slides-per-view="1" :space-between="0"
          :modules="modules" :pagination="{ clickable: true }" ref="mySwiper" id="mySwiper" utoplay>
          <swiper-slide v-for="item in cImgData" :key="item.id" class="swiper-container">
            <img class="image" :src="getImgUrl(item.imgs, 'jpg')" alt="" v-if="item.type == 1">
            <video :src="getImgUrl(item.imgs, 'mp4')" @play="stopSwiper" @pause="startSwiper" ref="video"
              style="z-index: 999;" controls v-if="item.type == 2" />
            <div class="swiper-slide-title">
              <h1></h1>
              <!-- <p>{{ item.text }}</p> -->
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue';
// import Swiper from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/lazy'
import 'swiper/css/autoplay'

const modules = [Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay]

// 导入并初始化数据
import proposalDocument from '../data-statistical/proposal-document'

const moduleName = ref('校园广播')
const showClick = ref(0)
const topoImgData = ref([])
const sceneData = ref('')
const programData = ref([])
const cImgData = ref([])

const cxt = getCurrentInstance()
const bus = cxt.appContext.config.globalProperties.$bus // 事件总线
onMounted(() => {
  // 初始化页面数据
  const data = proposalDocument.scenarioType[0]
  toTarget(0)
  bus.on('emergencyPlan', (index) => {
    toTarget(index)
  })
})

onBeforeUnmount(() => {
  bus.off('emergencyPlan')
})

// ----------------  点击滚动到内容  ----------------
// name场景名称 num下标 topoImg拓扑图 scene场景 program方案特点 cImg案例图
function toTarget (index, value) {
  const proData = proposalDocument.scenarioType[index]
  moduleName.value = proData.name
  showClick.value = index
  topoImgData.value = proData.topologyImg
  sceneData.value = proData.scenarioRequirements
  // ------方案特点赋值start-----
  const textArray = proData.programFeatures.split('\n');
  programData.value = textArray.map((text, index) => {
    const parts = text.split('：'); // 按冒号分割每行文本
    const trimmedData = parts.map(item => item.trim());
    if (trimmedData.length === 2) {
      const title = trimmedData[0].replace(/^\d+、/, '').trim(); // 去除行首的数字和点
      const textContent = trimmedData[1].trim();
      return { title, text: textContent };
    }
    return { title: '', text: text.trim() };
  });
  programData.value.pop()
  // ------方案特点赋值 end -----------
  cImgData.value = proData.caseImg
  // 滚动
  if (value) { document.getElementById("target").scrollIntoView({ behavior: 'smooth' }); }
}
// 动态导入图片
const getImgUrl = (src, val) => {
  return new URL(`../../assets/img/${src}.${val}`, import.meta.url).href;
};

const mySwiper = ref(null);
// 播放视频就停止轮播
const stopSwiper = () => {
  mySwiper.value?.$el.swiper.autoplay.stop()
};
// 暂停视频就开始轮播
const startSwiper = () => {
  mySwiper.value?.$el.swiper.autoplay.start()
};

</script>
<style scoped lang="less">
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
}
</style>


