<template>
  <div class="">
    <div class="sub_banner">
      <img src="@/assets/img/technology.jpg" mode="widthfix">
      <div class="tit">
        <span>产品中心</span>
        <p>技术引领未来，守护美好生活</p>
      </div>
    </div>
    <div class="product_main">
      <div class="left">
        <div v-for="(item, index) in TitleData" :key="index" @click="onClick(item.link)" class="box"
          :class="link === (index + 1) ? 'box-color' : ''">
          <router-link to="#">
            {{ item.name }}
          </router-link>
        </div>
      </div>
      <div class="right" v-if="link === 1">
        <div class="body">
          <ul class="clearfix">
            <li v-for="(item, index) in terminal" :key="index">
              <router-link :to="''" @click="routerClick(0, item.num)" class="a-link">
                <div class="img-box">
                  <img :src=item.link>
                </div>
                <div class="name">{{ item.name }}</div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="right" v-if="link === 2">
        <div class="body">
          <ul class="clearfix">
            <li v-for="(item, index) in aaa" :key="index">
              <router-link :to="''" @click="routerClick(1, item.num)" class="a-link">
                <div class="img-box">
                  <img :src=item.link>
                </div>
                <div class="name">{{ item.name }}</div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="right" v-if="link === 3">
        <div class="body">
          <ul class="clearfix">
            <li v-for="(item, index) in hostAndServer" :key="index">
              <router-link :to="''" @click="routerClick(2, item.num)" class="a-link">
                <div class="img-box">
                  <img :src=item.link mode="widthfix">
                </div>
                <div class="name">{{ item.name }}</div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';

import img_1 from '@/assets/img/img_1.png'
import img_2 from '@/assets/img/img_2.png'
import img_3 from '@/assets/img/img_3.png'
import img_4 from '@/assets/img/img_4.png'
import img_5 from '@/assets/img/img_5.png'
import img_6 from '@/assets/img/img_6.png'
import img_7 from '@/assets/img/img_7(1).png'
import img_8 from '@/assets/img/img_8.png'
import img_9 from '@/assets/img/img_9.png'
import img_10 from '@/assets/img/img_10.png'
import img_11 from '@/assets/img/img_11.png'
import img_12 from '@/assets/img/img_12.png'

import main_engine from '@/assets/img/main_engine.png'

const TitleData = reactive([
  { name: '云广播', link: 1 },
  { name: '前端产品', link: 2 },
  { name: '主机及服务器', link: 3 }
])
const cxt = getCurrentInstance()
const bus = cxt.appContext.config.globalProperties.$bus
onMounted(() => {
  bus.on('productClassification', (index) => {
    onClick(index)
    console.log(index);
  })
})

onBeforeUnmount(() => {
  bus.off('productClassification')
})

let link = ref(1)
const router = useRouter()

function onClick (num) {
  console.log(num);
  link.value = num
}
const terminal = reactive([
  { name: '入户式智能广播', link: img_1, num: 1 },
  { name: '智能音柱', link: img_2, num: 2 },
  { name: '云收扩机', link: img_3, num: 3 },
  { name: '壁挂智能广播音箱', link: img_4, num: 4 },
  { name: '智能广播播放盒', link: img_5, num: 5 },
  { name: '吸顶广播音箱', link: img_6, num: 6 },
  { name: '云广播摄像机', link: img_7, num: 7 },
  { name: '定向广播', link: img_8, num: 8 },
  { name: '号角喇叭', link: img_9, num: 9 },
  { name: '手持麦克风', link: img_10, num: 10 },
  { name: '远场扩音麦', link: img_11, num: 11 },
  { name: 'IP&4G寻呼话筒', link: img_12, num: 12 }
])
const hostAndServer = reactive([
  { name: '主机及服务器', link: main_engine, num: 1 },
])

function routerClick (val, num) {
  router.push({ name: 'productDetails', query: { link: val, number: num } });
}

</script>

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

.product_main {
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  padding: 100px 0;

  .left {
    float: left;
    width: 270px;
    line-height: 61px;
    font-size: 20px;
    position: relative;
    border: 2px solid #cccccc;
    border-bottom: none;
    cursor: pointer;

    .box {

      border-bottom: 2px solid #ccc;
    }

    .box:hover {
      background-color: rgb(20, 120, 190);

      a {
        color: #fff;
      }
    }

    .box-color {
      background-color: rgb(20, 120, 190);

      a {
        color: #fff;
      }
    }

    a {
      color: black;
      margin-left: 30px;
      text-decoration: none;
    }
  }

  .right {
    float: right;
    width: 900px;

    .body {
      margin-bottom: 20px;

      ul {
        li {
          width: 300px;
          height: 278px;
          float: left;

          a:hover {
            box-shadow: 0 0 10px 5px rgba(107, 174, 225, 0.3);

            .name {
              color: rgb(107, 174, 225);
            }
          }


          a {
            display: block;
            width: 100%;
            height: 100%;
            text-decoration: none;
            padding-top: 30px;

            .img-box {
              width: 150px;
              height: 150px;
              margin: 0 auto;
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

            .name {
              color: black;
              font-size: 17px;
              margin-top: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
            }

          }
        }
      }
    }
  }
}
</style>
