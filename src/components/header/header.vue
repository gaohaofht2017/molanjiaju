<template>
  <div class="header">
    <div class="container">
      <div>
        <p>为每一个漂洋过海的梦想,找一个家</p>
      </div>
      <div>
        <a class="login_span" v-if="signUp">
          <span>登录|注册</span>
        </a>
        <a class="issue_house">发布房源</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "header",
  data() {
    return {
      signUp: true
    }
  }
}
</script>

<style lang="scss" scoped >
.header {
  border: 1px solid #f1f1f1;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  .container {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    flex-wrap: nowrap;
    >div {
      align-content: space-around;
      p {
        font-size: 14px;
        color: #999;
        font-family: PingFang SC;
      }
      .login_span {
        margin-right: 20px;
        font-family: PingFang SC;
        span {
          cursor: pointer;
          color: #333;
        }
        &:hover span {
          color: #fe5924;
        }
      }
      .issue_house {
        display: inline-block;
        width: 90px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #999;
        border-radius: 5px;
        color: #fe5924;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
}
</style>
