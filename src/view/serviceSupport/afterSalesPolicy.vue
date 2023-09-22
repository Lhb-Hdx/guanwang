<template>
  <div id="">
    <div class="sub_banner">
      <img src="@/assets/img/technology.jpg" mode="widthfix">
      <div class="tit">
        <span>服务支持</span>
        <p>技术引领未来，守护美好生活</p>
      </div>
      <div class="menu">
        <ul>
          <li @click="setShow(true)">售后政策</li>
          <li @click="setShow(false)">操作指南</li>
        </ul>
      </div>
    </div>
    <div class="single_wrapper">
      <div class="single_center" v-if="show">
        <div class="about_con">售后服务承诺书</div>
        <div class="about_text">
          <div class="text til">尊敬的客户:</div>
          <div class="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了保护客户的合法权益，免除客户的后顾之忧，请通过正规渠道购买泛予科技产品。泛予科技在此特向客户做出产品的标准售后承诺。
          </div>
          <div class="text til">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特别提示:</div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本政策仅适用于在中华人民共和国境内(不包括中国香港、中国澳门和中国台湾地区)销售的泛予科技产品。</div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            泛予科技所作的售后服务承诺，仅适用于泛予科技产品出厂时标准配置的部件或配件(参见装箱单)。客户在购买产品时若附带装箱单未载明的其他部件或配件，由销售商自行提供售后服务，销售商向客户做出的所有超出泛予科技售后服务政策的承诺，其责任由销售商承担，泛予科技将不承担责任，请客户在购买产品时向销售商索要书面证明，以保证享有该等额外承诺服务内容的权利。
          </div>
          <div class="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;购货发票、保修凭证和装箱单是客户获得服务的重要凭证，请妥善保管。在泛予科技要求为客户提供质保服务时，请客户务必出示前述凭证。</div>
          <div class="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在质量保证期内，泛予科技售后服务为客户更换整机或故障部件后，故障产品或部件由泛予科技服务网点以及授权维修机构收回并享有所有权，不予退还。</div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;促销产品、定制型号产品及独立销售的附属产品(如键盘
            鼠标、遥控器、电源适配器等)、零部件的售后服务政策，请参考促销产品、定制型号产品对应的保修凭证和独立销售的附属产品、零部件的购销合同。
          </div>
          <div class="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特价销售的演示机产品不享受泛予科技退换货的相关政策，质量保证期限以购销合同为准，质量保证期内，该等产品出现质量问题时，泛予科技仅为客户提供免费维修或更换属产品本身质量原因损坏的零部件。
          </div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特殊项目产品的售后服务以购销合同为准。</div>
          <div class="text til">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一、 三包服务 </div>
          <div class="text til">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、包退</div>
          <div class="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;产品自购买之日起7日内(含)因产品本身质量原因发生故障，客户可以选择退货、换货或者免费修理，退换货申请时请联系相应的销售商办理。</div>
          <div class="text til">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、包换</div>
          <div class="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;产品自购买之日起30日内(含)发生故障，经泛予科技售后维修工程师测试确认为产品质量原因导致的，客户可以选择换货或者免费维修。</div>
          <div class="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;故障产品退货或换货时，随附物品、文件及包装请一并退还。更换后的产品整机或部件将成为客户的财产，故障产品归泛予科技所有。</div>
          <div class="text til">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、包修</div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            质量保证期内，产品发生故障，经泛予科技售后维修工程师测试确认为产品质量原因导致的泛予科技为客户免费维修或更换属产品本身质量原因损坏的零部件。质量保证期外产品出现故障时泛予科技可提供有偿维修或更换损坏的零部件。产品维修时，请客户提供产品保修凭证
          </div>
          <div class="text til">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二、标准保修服务政策</div>
          <div class="text til">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、保修期限</div>
          <div class="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保修期的具体起算日以购买产品发票开具或合同约定日期为准。如无发票或合同等有效凭证则保修期将自产品从泛予科技出厂之日起推算，保修期12个月。
          </div>
          <div class="text til">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、保修服务方式</div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;快递或物流至公司指定维修点，联系售后客服，获取相关信息。请客户</div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）自行备份产品中包含的所有程序和数据或确保它们的安全，泛予科技不对使用或维修过程中任何因数据丢失承担责任。
          </div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）从产品中删除所有受法律保护的保密和个人信息，如客户不能删除产品中的此类信息，客户需在申请保修时告知服务提供方。
          </div>
          <div class="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）对产品进行适合所选择运输方式的妥善包装，注意防水、防潮、防震、防撞，谨慎选择寄送方式和运输商并购买运输保险，泛予科技不承担客户在运输过程中的任何损失。
          </div>
          <div class="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）若无特殊需要，请不要在送修的产品中附带周边硬件，线缆等物品，如有特殊需要请事先和泛予科技客服联系并在送修时附随相关清单，以免造成不必要的损失。
          </div>
          <div class="text til">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、维修服务注意事项:</div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客户享受维修服务时需遵守泛予科技服务申请程序。</div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客户须提供必要的支持和配合以便泛予科技提供服务，包括提供故障描述及现场视频拍摄，以便快速诊断故障原因。</div>
          <div class="text til">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三、咨询服务</div>
          <div class="text til">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;热线支持服务</div>
          <div class="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果客户在产品使用中有任何问题需要咨询时，欢迎客户拨打泛予科技服务热线：1803806776或13302964863，手机服务时间:7×12小时，服务时间为：9:00
            ̶ 21:00。
          </div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务邮箱：14035892@qq.com</div>
          <div class="text til">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四、服务监督</div>
          <div class="text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了不断完善客户服务管理和拓展新的客户服务模式，泛予科技欢迎每一位客户对我们的服务进行监督，或提出改善建议。泛予科技的服务监督联系方式如下:
          </div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 联系人：公司负责人</div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 服务电话：18588225611</div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 公司网站：www.faryu.cn</div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 联系地址：深圳市南山区南油第四工业区7栋7层</div>
          <div class="text til">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;五、其他</div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 本政策中未列明的条款，按照相关法律法规的规定执行。</div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 本政策由泛予科技客户服务部门负责解释，泛予科技有权变更、修订本政策。</div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 在符合相关法律法规强制性规定的前提下，泛予科技保留对本政策的最终解释权。</div>
          <div class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 本政策自公布之日起实施。</div>
        </div>
      </div>

      <div class="instruction" v-else>
        <div class="til">
          <div class="left">文件名称</div>
        </div>
        <div class="body">
          <div class="text">
            <span class="left">操作指南.docx</span>
            <span class="right" @click="download()">下载</span>
            <span class="look" @click="look()">预览</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true)
function setShow (data) {
  show.value = data
}
function download (data) {
  console.log(data);
}
function look (data) {
  console.log(data);
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

  .menu {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 64px;
    line-height: 64px;
    z-index: 10;
    font-size: 18px;
    background-color: rgba(30, 132, 198, .7);
    color: #fff;

    ul {
      width: 1200px;
      margin: 0 auto;
      display: flex;

      li {
        font-size: 19px;
        padding: 0 30px;
        cursor: pointer;
      }

      li:hover {
        background-color: rgb(30, 132, 198);
        font-weight: bold;
      }
    }
  }
}

.single_wrapper {
  padding: 100px 0;

  .single_center {
    width: 1200px;
    margin: 0 auto;
    border: 1px solid rgb(162, 160, 160);

    .about_con {
      text-align: center;
      text-indent: 24px;
      white-space: normal;
      font-size: 18px;
      margin: 30px 0;
      font-weight: 700;
      font-size: 24px;
    }

    .about_text {
      white-space: pre;
      padding: 0 5px;

      .text {
        width: 100%;
        word-wrap: break-word;
        white-space: normal;
        margin: 15px 0;
      }

      .til {
        font-weight: bold;
        font-size: 15px;
      }
    }
  }
}

.instruction {
  width: 1200px;
  margin: 0 auto;
  background-color: rgb(248, 248, 248);

  .til {
    line-height: 64px;
    background: #1478be;
    color: #fff;
    height: 64px;
    position: relative;
    font-size: 20px;

    .left {
      margin-left: 50px;
    }
  }

  .body {
    .text {
      width: 100%;
      height: 58px;
      border-bottom: 1px solid #d9d9d9;
      line-height: 58px;
      font-size: 18px;
      padding: 0 50px;

      .look {
        float: right;
        cursor: pointer;
      }

      .right {
        float: right;
        margin-left: 80px;
        cursor: pointer;
      }
    }
  }
}
</style>
