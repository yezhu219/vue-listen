<template>
  <div class="footer">
    <div class="top">
      <img src="../assets/img/logo-f.png" alt="" class="footer-logo">
      <img src="../assets/img/line.png" alt="" class="line">
    </div>
    <div class="df main">
      <div class="f1">
        <div class="f-title">友情链接</div>
        <div class="df" >
          <div class="link mr">Twitter</div>
          <div class="link mr">Medium</div>
          <div class="link mr">Facebook</div>
          <div class="link mr">Github</div>
          <div class="link mr">Roit</div>
          <div class="link">电报</div>
        </div>
      </div>
      <div class="f2">
        <div class="f-title">联系我们</div>
        <div class="df ">
          <div class="link mr">A：成都市高新区腾讯大厦</div>
          <div class="link">E：Mroand@163.com</div>
        </div>
      </div>
      <div class="f3">
        <div class="f-title">基金会信息</div>
        <div class="df">
          <div class="link">WSAQWD基金</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navList: [
         
        ],
      }
    },
    methods: {
    }
  }
</script>

<style lang="less">
  .footer {
    height: 200px;
    background-color: #181818;
    padding: 30px 200px;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 100;
    .footer-logo {
      width: 156px;
      height: 16px;
      margin-bottom: 30px;
    }
    .line {
      width: 100%;
      height: 2px;
    }
    .main {
      padding-top: 30px;
    }
    .f-title {
      font-size: 16px;
      margin-bottom: 20px;
      color: #fff;
    }
    .link {
      font-size: 16px;
      color: #fff;
      cursor: pointer;
    }
    .f1 {
     flex: 0 0 45%;
     
    }
    .f2 {
      flex: 0 0 40%;
      
    }
    .f3 {
      flex:1;
    }
    .mr {
          margin-right: 40px;
      }
  }
</style>
