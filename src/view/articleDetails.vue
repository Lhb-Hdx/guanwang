<template>
  <div id="">
    <div class="sub_banner">
      <img src="@/assets/img/technology.jpg" mode="widthfix">
      <div class="menu">
        <ul>
          <li @click="setShow(1)" :class="1 == form.val ? 'active' : ''">公司新闻</li>
          <li @click="setShow(2)" :class="2 == form.val ? 'active' : ''">行业资讯</li>
        </ul>
      </div>
    </div>
    <div class="single_wrapper">
      <div class="single_center" v-if="form.val == 1">
        <div class="body">
          <ul>
            <li>
              <a :href="generateArticleLink('InformationDetails', 1, 1)" target="_blank" alt="泛予科技">
                <img src="@/assets/img/article_img.jpg">
                <h3>标题</h3>
                <p>内容</p>
                <span>详情 →</span>
                <span class="fr">12-09-09</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, reactive } from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios';
import qs from 'qs';
const form = reactive({
  val: '',
  id: '',
  pageNum: 1,
  pageSize: 10
})
onMounted(() => {
  form.val = getData().val
  form.id = getData().id
})

function generateArticleLink (data, id, val) {
  return `/#/${data}?id=${id}&val=${val}`;
}

function setShow (data) {
  form.val = data
  getList(data)
}

function getList (data) {
  axios.get('/api/admin/list_all_user', {
    params: { pageNum: form.pageNum, pageSize: form.pageSize },
    // headers: {
    //   Authorization: `BearereyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODU4ODIyNTYxMSIsImNyZWF0ZWQiOjE2OTU3MTA5MTYxNzUsImV4cCI6MTY5NjMxNTcxNn0.huMsT3EPoSiGpUNz1tnHUl-jiulK7-26d2CVoOI5WtT1otGxQ9jAJaNQoJwi3ByJ8JwqTkWy8Lgf22yu8ebNEA`,
    // },
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
  })
    .then(response => {
      console.log(response.data); // 处理成功响应
    })
    .catch(error => {
      console.error(error); // 处理请求错误
    });
}

// 获取路由携带参数
function getData () {
  if (document.URL.indexOf("?") < 0) return;//获取当前url地址,如果没参数.直接返回
  var str = document.URL.split("?")[1];
  var obj = {};
  var arr;
  //当只有一个参数传过来时
  if (str.indexOf("&") < 0) {
    if (str.indexOf("=") < 0) return;
    arr = str.split("=");
    obj[arr[0]] = arr[1];
    return obj;
  }
  //当有多个参数时
  arr = str.split("&");
  var arr1;
  for (var i = 0; i < arr.length; i++) {
    arr1 = arr[i].split("=");
    obj[arr1[0]] = arr1[1];
  }
  return obj;
}


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

  .menu {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 64px;
    line-height: 64px;
    z-index: 10;
    font-size: 18px;
    background-color: rgba(30, 132, 198, .8);
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

.active {
  background-color: rgb(30, 132, 198);
  font-weight: bold;
}

.single_wrapper {
  background-color: rgb(248, 248, 248);
  padding: 100px 0;

  .single_center {
    background-color: #fff;
    width: 1200px;
    margin: 0 auto;

    .body {

      li {
        border: 1px solid #bbb9b9;
        position: relative;
        padding-left: 356px;
        box-sizing: border-box;
        width: 100%;
        padding-right: 72px;
        background: #f6f6f6;
        height: 225px;
        margin-bottom: 19px;

        a {
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;

          img {
            position: absolute;
            left: 0;
            top: 0;
            width: 300px;
            // height: 225px;
          }

          h3 {
            padding-top: 25px;
            font-size: 24px;
            padding-bottom: 23px;
            // color: #333;
          }

          p {
            padding-bottom: 20px;
            line-height: 24px;
            color: #333;

          }

          span {
            font-size: 16px;
            color: #666;
          }

          .fr {
            float: right;
          }
        }
      }
    }
  }
}
</style>
