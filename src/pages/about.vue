<template>
  <div class="about">
    <myHeader></myHeader>
    <div class="content">
      <div class="bg-about">
        <img src="../assets/img/icon-arr.png" alt="" class="icon-arr">
        <div class="info-box">
          <h5 class="c-fff fz20 fw-600 lh-2">我们 <br> 用01 <span class="fw-600 c-00b">创造价值</span> </h5>
          <div class="line"></div>
          <p class="fz10 mb-17">我们信仰数字世界 ，并用它的语言为自己命名。</p>
          <div class="ab-item">
            团队的基因，由国内最早从事区块链行业的人才组建
            生而不凡，用好的开始赢一半成功
          </div>
          <div class="ab-item">
            如同01，我们孜孜不懈 进入IPFS生态建设赛道之前，技术、运营、运维…在实操中磨砺两年之久
            成功，往往得靠叠加式的努力
          </div>
          <div class="ab-item">
            如同01，我们无所不能 凭借对区块链领域的深度理解，我们用商业概念赢得用户追随，市场一荣，万事俱荣
            无所不能，就是本能
          </div>
          <div class="ab-item">
            如同01，我们不可估量 用IPFS替代HTTP、靠分布式存储空间创造经济价值、再造比特币神话、推动web3.0时代到来
            让每个人成为节点，就能创造不可估量
          </div>
          <div class="ab-item">

            我们，用简单的01为世界创造价值
            01，让简单的我们有了价值
            简单，往往成就伟大

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
.about {
  .content {
    .bg-about {
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
      background-image: url(../assets/img/bg-about.png);
      height: 475px;
      display: flex;
      justify-content: flex-end;
      .icon-arr {
        width: 32px;
        height: 32px;
      }
      .info-box {
        width: 448px;
        height: 100%;
        background-color: rgba(0,0,0,.9);
        padding: 60px 82px 37px 48px;
        h5 {
          margin-bottom: 18px;
        }
        .line {
          background-color: #fff;
          height: 2px;
          width: 11px;
          margin-bottom: 17px;
        }
        .ab-item {
          line-height: 15px;
          color: rgba(255,255,255,.5);
          font-size: 8px;
          margin-bottom: 21px;
          padding-left: 9px;
          position: relative;
          &:after {
            content: '';
            position: absolute;
            width: 2px;
            height: 2px;
            border-radius: 50%;
            background-color:  rgba(255,255,255,.5);
            top: 5px;
            left: 0;
          }
        }
      }
    }
  }
  .mb-17 {
    margin-bottom: 17px;
  }
}
</style>
