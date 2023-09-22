<template>
  <div id="CompanyIntroduction">
    <div class="banner container-fuild text-center">关于我们</div>
    <div class="container">
      <div class="row CompanyIntroduction-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <img class="img-responsive center-block" src="@/assets/img/about_img.png" />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h3>泛予智能科技有限公司</h3>
          <p class=".text-justify">
            泛予科技是一家专注于物联网广播系统开发与运营的互联网高科技公司，核心管理层有着国内领先的技术和互联网公司高管从业经历，拥有极为丰富的平台和智能终端开发及运营能力，目前提供“移动式智联广播”服务，面向对象涉及应急、教育、商业、制造业、企事业等，因产品具有极高的稳定性、亲民的价格、优秀的交互体验，深受市场高度关注。
          </p>
          <p class=".text-justify">
            公司与中国移动、中国电信、中国联通、天翼物联、中车集团等建立了深度合作关系，是上述客户物联网核心音视频产品及解决方案核心供应商，公司的直接客户为政府、学校、连锁商业、企事业等，通过产品能力、供应链管控、诚信经营和贴心服务，泛予科技全方位满足了给客户承诺的需求。
          </p>
          <p class=".text-justify">

          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="CompanyIntroduction">
import WOW from 'wow.js'
import { onMounted } from 'vue'
onMounted(() => {
  var wow = new WOW()
  wow.init()
})
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/banner1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}

.row {
  margin-right: 0;
  margin-left: 0;
}

.CompanyIntroduction-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}

.CompanyIntroduction-container>div>p {
  font-size: 14px;
  line-height: 2.5rem;
}

@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }
}
</style>

