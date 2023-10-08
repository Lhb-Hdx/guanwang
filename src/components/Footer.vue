<template>
  <div id="footer" class="bottom_main">
    <div class="f-box">
      <div class="left">
        <dl>
          <dt>
            <span @click="routerClick(0, 'Home')">首页</span>
          </dt>
          <dd></dd>
        </dl>
        <dl>
          <dt><span @click="routerClick(1, 'productClassification', 1)">产品分类</span></dt>
          <dd><span @click="routerClick(1, 'productClassification', 1)">云广播</span></dd>
          <dd><span @click="routerClick(1, 'productClassification', 2)">前端产品</span></dd>
          <dd><span @click="routerClick(1, 'productClassification', 3)">主机及服务器</span></dd>
        </dl>
        <dl>
          <dt><span @click="routerClick(2, 'emergencyPlan')">应用方案</span></dt>
          <dd><span @click="routerClick(2, 'emergencyPlan', 0)">校园广播</span></dd>
          <dd><span @click="routerClick(2, 'emergencyPlan', 1)">园区广播</span></dd>
          <dd><span @click="routerClick(2, 'emergencyPlan', 2)">商铺广播</span></dd>
          <dd><span @click="routerClick(2, 'emergencyPlan', 3)">景区广播</span></dd>
          <dd><span @click="routerClick(2, 'emergencyPlan', 4)">乡村广播</span></dd>
          <dd><span @click="routerClick(2, 'emergencyPlan', 5)">酒店广播</span></dd>
        </dl>
        <dl>
          <dt><span @click="routerClick(3, 'serviceSupport')">服务支持</span></dt>
          <dd><span @click="routerClick(3, 'serviceSupport', true)">售后政策</span></dd>
          <dd><span @click="routerClick(3, 'serviceSupport', false)">操作指南</span></dd>
        </dl>
        <dl>
          <dt><span @click="routerClick(4, 'aboutFanYu')">关于泛予</span></dt>
          <!-- <dd><span @click="routerClick(4, 'aboutFanYu')">公司简介</span></dd>
          <dd><span @click="routerClick(4, 'aboutFanYu')">发展历程</span></dd>
          <dd><span @click="routerClick(4, 'aboutFanYu')">荣誉资质</span></dd>
          <dd><span @click="routerClick(4, 'aboutFanYu')">社会责任</span></dd>
          <dd><span @click="routerClick(4, 'aboutFanYu')">联系方式</span></dd> -->
        </dl>
      </div>
      <div class="right">
        <ul>
          <li>
            <p>服务热线</p>
            <h3>13302964863</h3>
            <h3>18038067761</h3>
          </li>
        </ul>
        <img src="@/assets/img/favicon2.png" alt="logo图" />
      </div>
    </div>

  </div>
  <div class="bottom_copy">
    <div class="w1200">
      <div class="left">深圳市泛予科技有限公司 &nbsp; &nbsp;&nbsp;&nbsp;
        <span>邮箱：14035892@qq.com &nbsp; &nbsp;&nbsp;&nbsp;</span>
        <span>地址：深圳市南山区南油第四工业区7栋707</span>
      </div>
    </div>
  </div>
</template>

<script setup name="Footer">
import { ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router';
const cxt = getCurrentInstance()
const bus = cxt.appContext.config.globalProperties.$bus
const router = useRouter();
function routerClick (index, data, num) {
  GoTop()
  bus.emit('printMessage', index)
  bus.emit(data, num)
  router.push({ name: data });
}

const flag = ref(false)
function GoTop () {
  (function smoothscroll () {
    var currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothscroll)
      window.scrollTo(0, currentScroll - currentScroll / 10)
    }
  })()
}

</script>

<style scoped lang="less">
.bottom_main {
  border-bottom: 1px solid rgb(47, 48, 52);
}

#footer {
  width: 100%;
  height: 300px;
  color: #fff;
  background: rgb(25, 27, 33);
  padding-top: 65px;
  padding-bottom: 51px;
  overflow: hidden;
}

.f-box {
  width: 1200px;
  margin: 0 auto;
}

.left {
  float: left;



  dl {
    dt>span {
      color: #fff;
    }

    span:hover {
      color: #fff;
      text-decoration: none;
      cursor: pointer
    }

    padding-right: 20px;
    float: left;
    min-width: 170px;

    dt {
      font-size: 16px;
      margin-bottom: 20px;
    }

    dd {
      line-height: 28px;

      span {
        color: #999;
        font-size: 14px;
      }
    }
  }
}

.right {
  width: 300px;
  float: right;
  text-align: right;


  li {
    color: #fff;
    margin-bottom: 30px;

    p {
      font-size: 13px;
    }

    h3 {
      font-size: 20px;
      font-weight: bold;
    }
  }

  img {
    margin-bottom: 38px;
    display: block;
    width: 100px;
    height: 100px;
    float: right;
  }
}

.bottom_copy {
  width: 100%;
  height: 50px;

  background: rgb(25, 27, 33);
  line-height: 50px;

  .w1200 {
    width: 1200px;
    margin: 0 auto;

    .left {
      color: #999;
      float: left;
      margin-left: 15px;
    }
  }
}
</style>

