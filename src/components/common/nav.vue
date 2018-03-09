<template>
  <div class="nav">
    <div class="container">
      <section class="logo"></section>
      <section class="navgation">
        <ul>
          <li class="selectColor">首页</li>
          <li>澳洲房源</li>
          <li>房源定制化服务</li>
          <li>家装租赁</li>
          <li>生活服务</li>
          <li>澳洲足迹</li>
        </ul>
      </section>
      <section class="phone">
        <i></i>咨询电话:
        <span>400 123 321 12</span>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: "nav",
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped >
.nav {
  height: 98px;
  box-sizing: border-box;
  line-height: 98px;
  .container {
    display: flex;
    height: 100%;
    display: -webkit-flex;
    justify-content: space-between;
    .logo {
      width: 171px;
      height: 48px;
      background: url(../../assets/images/logo.png);
      transform: translateY(25px);
    }
    .navgation {
      font-family: "Microsoft Yahei";
      font-size: 16px;
      >ul {
        display: flex;
        display: -webkit-flex;
        color: #666;
        .selectColor{
          color: #fe5924;
        }
        li{
          margin: 0 10px;
        }
      }
    }
    .phone{
      color: #999;
      font-size: 14px;
      font-family: PingFang SC;
      i{
        display: inline-block;
      }
      span{
        color: #fe5924;
        font-weight: bold;
        font-family: Arial;
        font-size: 16px;
      }
    }
  }
}
</style>
