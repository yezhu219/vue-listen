<template>
  <div class="trust">
    <myHeader></myHeader>
    <div class="content fz10">
      <div class="trust-nan fsb fz7 c-20">
        <div>找托管</div>
        <div>
          <span>优势</span>
          <span class="lc">流程</span>
        </div>
      </div>
      <div class="box t1">
        <div class="t1-text-1">
          专业所以高效，高效所以高收益 <br>
          顺势而为，借势而进
        </div>
        <div class="t1-text-2">专业、高效</div>
      </div>
      <div class="box t2 fz10 c-fff">
        <div class="t2-1"><span class="c-00b">智能出价，</span> 挖矿收益最大化；</div>
        <div class="t2-2" style="line-height: 1.5"><span class="c-00b">共享 </span>全球收益，规避单台矿机挖矿 <br> 收益过低风险； </div>
        <div class="t2-3">挖矿<span class="c-00b">收益 </span>按比例抽取托管费，无需额外花费；</div>
        <div class="t2-4">终止托管服务时，退回矿机，0成本。 </div>
        <div class="t2-5">
          <p class="fz16 fw-600 c-00b mb-10">极低成本，享收益优势 </p>
          <p class="fz12 c-fff mb-10">整合矿场资源，降低入围门槛、解放投入成本 </p>
          <p class="fz12 c-fff"> 提升矿机效率、优化单位时间效益 </p>

        </div>

      </div>
      <div class="box t3">
          <div class="t3-1 fz20 c-fff lh-2">顶级机房，专业运维 <br>
            <p class="fz16">遴选海内外<span class="c-00b">IDC</span>渠道，多路配电、多重暖通，保障矿区环境稳定 <br></p>
            专业团队 <span class="c-00b">7*24小时维护升级，安全无忧 </span></div>
          <div class="t3-2 fz10" style="line-height: 1.8;">
            区块链领域多年从业经验，收益安全稳定；<br>
            专业运维团队7*24小时维护，UPS、高低压、空调等动力环境 <br> 系统维护；<br>
            根据挖矿需求及时、统一对矿机升级管理；<br>
            挖矿流程透明，第三方监控。<br>
          </div>
      </div>
      <div class="t4">
        <div class="t4-title">托管流程</div>
        <div class="ser">
          <div class="ser-item" >
            <img src="../assets/img/t-4.png" alt="">
            <h4>购买矿机</h4>
            <p>通过微信公众号订购托管服务 </p>
          </div>
          <div class="ser-item" >
            <img src="../assets/img/t-2.png" alt="">
            <h4>官方发货</h4>
            <p>定制服务器并快递发货 </p>
          </div>
          <div class="ser-item" >
            <img src="../assets/img/t-1.png" alt="">
            <h4>矿场安装</h4>
            <p>专业运维人员部署 </p>
          </div>
          <div class="ser-item" >
            <img src="../assets/img/t-3.png" alt="">
            <h4>开始挖矿</h4>
            <p>获得挖矿收益 </p>
          </div>
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
.trust {
  .trust-nan {
    background-color: #F4F4F4;
    height: 35px;
    line-height: 35px;
    padding-left: 30px;
    padding-right: 47px;
    .lc {
      margin-left: 32px;
    }
  }
  .box {
    height: 475px;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    position: relative;
    &.t1 {
      background-image: url(../assets/img/t1.png);
      .t1-text-1 {
        color: #DDDDDD;
        font-size: 12px;
        line-height: 1.5;
        position: absolute;
        left: 80px;
        top: 131px;
      }
      .t1-text-2 {
        position: absolute;
        color: #fff;
        font-size: 15px;
        left: 80px;
        bottom: 60px;
      }
    }
    &.t2 {
      background-image: url(../assets/img/t2.png);
      .t2-1 {
        position: absolute;
        top: 146px;
        left: 208px;
      }
      .t2-2 {
        position: absolute;
        top: 147px;
        right: 200px;
      }
      .t2-3 {
        position: absolute;
        top: 233px;
        left: 281px;
      }
      .t2-4 {
        position: absolute;
        top: 267px;
        right: 197px;
      }
      .t2-5 {
        position: absolute;
        left: 80px;
        bottom: 60px;
      }
    }
    &.t3 {
      background-image: url(../assets/img/t3.png);
      .t3-1 {
        position: absolute;
        left: 80px;
        bottom: 100px;
      }
      .t3-2 {
        position: absolute;
        right: 85px;
        bottom: 95px;
        color: rgba(255,255,255,.5);
      }
    }
  }
  .t4 {
    height: 325px;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-image: url(../assets/img/t4.png);
    padding-top: 60px;
    .t4-title {
      font-size: 15px;
      margin-left: 80px;

      margin-bottom: 48px;
    }
    .ser {
      margin: 0 140px;
      display: flex;
      .ser-item {

        width: 150px;
        height: 100px;
        background-color: #F8F8F8;
        text-align: center;
        margin-right: 27px;
        padding-top: 20px;
        /*border: 1px solid #DDDDDD;*/
        &:last-child {
          margin-right: 0;
        }
        img {
          width: 22px;
          height: 22px;
          margin-bottom: 12px;
          display: inline-block;
        }
        h4 {
          margin-bottom: 8px;
        }
        p {
          font-size: 8px;
          color: #888;

        }
      }
    }
  }
}
</style>
