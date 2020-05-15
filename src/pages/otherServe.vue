<template>
  <div class="otherServe">
    <myHeader></myHeader>
    <div class="content">
      <div class="title c-fff fz20 fw-600">更多<span class="fw-600 c-00b">定制化服务</span> </div>
      <div class="line-g"></div>
      <p class="fz10 lh-2" style="color: #DDDDDD;">
        提供高性能分布式存储系统及计算、情报速递、市场开发… <br>
        助您拓土数字空间，实现无限价值
      </p>
      <div class="sv-item sv1">
        <img src="../assets/img/sv1.png" alt="">
        <div class="t-10">
          <h5 class="fz12"><span class="c-00b">硬件</span>优势</h5>
          <p>

            用最强硬件，最大化服务器存储效率，<br>
            最大化的终端收益

          </p>
        </div>
      </div>
      <div class="sv-item sv2">
        <img src="../assets/img/sv2.png" alt="">
        <div class="t-10">
          <h5 class="fz12"><span class="c-00b">机房</span>优势</h5>
          <p>
            全球布局多个专业矿场，多路配电、多重 <br>
            暖通，保障矿区环境稳定
          </p>
        </div>
      </div>
      <div class="sv-item sv3">
        <img src="../assets/img/sv3.png" alt="">
        <div class="t-10">
          <h5 class="fz12"><span class="c-00b">软件</span>优势</h5>
          <p>


            调配业内顶尖的区块链团队， <br>
            深度开发C01 OS系统，让强大硬件开足马力


          </p>
        </div>
      </div>
      <div class="sv-item sv4">
        <img src="../assets/img/sv4.png" alt="">
        <div class="t-10">
          <h5 class="fz12"><span class="c-00b">运维</span>优势</h5>
          <p>

            遴选海内外IDC渠道，专业团队7*24小时维护；<br>
            定期升级优化

          </p>
        </div>
      </div>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
  import myHeader from '@/components/header.vue'
  import  myFooter from '@/components/footer.vue'
  export default {
    data () {
      return {}
    },
    methods: {},
    components: {
      myHeader,
      myFooter
    }
  }
</script>

<style lang="less">
.otherServe {
  .content {
    height: 475px;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-image: url(../assets/img/bg-serve.png);
    padding-top: 60px;
    padding-left: 80px;
    position: relative;
    .line-g {
      width: 14px;
      height: 2px;
      background-color: rgba(255,255,255,.3);
      margin-top: 12px;
      margin-bottom: 12px;
    }
    .sv-item {
      display: flex;
      position: absolute;
      img {
        width: 44px;
        height: 44px;
        margin-right: 18px;
      }
      h5 {
        margin-bottom: 5px;
        color: #fff;
      }
      p {
        line-height: 12px;
        color: rgba(255,255,255,.5);
        font-size: 7px;
      }
      &.sv1 {
        top: 182px;
        left: 182px;
      }
      &.sv2 {
        top: 256px;
        left: 80px;
      }
      &.sv3 {
        top: 256px;
        left: 301px;
      }
      &.sv4 {
        top: 329px;
        left: 204px;
      }
      .t-10 {
        padding-top: 6px;
      }
    }
  }
}
</style>
