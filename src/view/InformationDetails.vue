<template>
  <div id="">
    <div class="sub_banner">
      <img src="@/assets/img/technology.jpg" mode="widthfix">
    </div>
    <div class="single_wrapper">
      <div class="single_center">
        <div class="news_detail">
          <div class="title">
            <h1>标题</h1>
            <div class="marks">
              <span class="t1">时间：11-11-11</span>
              <span class="t2"><em>来源：</em>原创</span>
            </div>
          </div>
          <div class="context">
            文章内容
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import axios from 'axios';
import qs from 'qs';
const show = ref(1)
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
}

.single_wrapper {
  background-color: rgb(248, 248, 248);
  padding: 100px 0;

  .single_center {
    background-color: #fff;
    width: 1200px;
    margin: 0 auto;

    .news_detail {
      padding: 50px;
      background: #fff;
      box-shadow: 1px 0 2px rgba(0, 0, 0, 0.1);
      margin-bottom: 100px;

      .title {
        padding-bottom: 30px;
        border-bottom: 1px solid #999;

        h1 {
          font-weight: normal;
          font-size: 36px;
          line-height: 60px;
          text-align: left;
          color: #333;
        }

        .marks {
          margin-top: 30px;

          .t1 {
            float: left;
            margin-left: 15px;
            margin-right: 14px;
            font-size: 16px;
            color: #333;
          }

          .t2 {
            em {
              font-style: normal;
              color: #999;
            }

            font-size: 16px;
            color: #333;
          }
        }
      }

      .context {
        padding-top: 50px;
        line-height: 30px;
        font-size: 16px;
      }
    }
  }
}
</style>
