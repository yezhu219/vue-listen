<template>
  <div class="page-index fz30">
    <div class="top">
      <myHeader :black="true"></myHeader>
      <div class="des fz7 c-fff">
        <p>2019年，中本聪的设想，让“比特币”创世区块诞生</p>
        <p class="mb-10">2019年，Web3.0的推动，让区块链走进大众视野</p>
        <p class="fz10 c-00b">十年，大众看见：比特币释放红利，数字币百花齐放</p>
        <p class="fz10 c-00b mb-10">十年，少数人看见：基于信任的区块链技术发展为电子货币的核心</p>
        <p>基于诚实和透明诉求，“去中心化”是互联网发展50载之际，全球互联网用户最强大的呼声，</p>
        <p>“区块链”作为核心技术成为时代风口，推动数据变革的潮流汹涌而至——5G、人工智能、物联网...</p>
        <p>早在2014年，IPFS开始迈入替代http网络传输协议之路</p>
        <p class="mb-10">这场颠覆传统互联网的智能化变革，已呈大势所趋</p>
        <p class="fz8 c-00b">将全球存储及网络资源有效利用、创造价值的生态之举，令Filecoin加密货币的时代，</p>
        <p class="fz8 c-00b mb-10">倾刻到来</p>
        <p class="fz10 c-00b">眼界，能看见机会；行动，将机会变现</p>
      </div>
    </div>
    <div class="bg-i-2">
      <div class="s1 fsb mb-10">
        <div class="s1-text">
          <h4>云立方C01</h4>
          <h5>挖矿蓝海中的旗舰矿机 </h5>
          <p>IPFS币圈资深矿工的选择 </p>
        </div>
        <img src="../assets/img/i-1.png" alt="">
      </div>
      <div class="fsb">
        <div class="s2 fsb">
          <div class="s2-text">我们 <br> 用<i class="c-00b">01</i> <br> 创造价值</div>
          <img src="../assets/img/s2.png" alt="">
        </div>
        <div class="s3">
          <div class="s3-text">
            <h4>一站式 <br><span class="c-00b fw-600">托管 </span></h4>
            <p>
              专业所以高效，高效所以高收益 <br>
              顺势而为，借势而进
            </p>
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
  data() {
    return {

    }
  },
  created() {

  },
  methods:{

  },
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style lang="less">
  .page-index {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    .top {
      height: 475px;
      /*width: 960px;*/
      background-image: url(../assets/img/top.png);
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
      .des {
        width: 380px;
        height: 208px;
        padding: 17px 0 15px 20px;
        margin-top: 70px;
        margin-left: 30px;
        background-image: url(../assets/img/bg-top.png);
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        line-height: 1.5;
      }
    }
    .bg-i-2 {
      margin: 37px 30px;
      .s1 {
        background-image: url(../assets/img/bg-i-2.png);
        height: 300px;
        width: 900px;
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        .s1-text {
          margin-left: 30px;
          margin-top: 94px;
          h4 {
            font-weight: bold;
            font-size: 25px;
            margin-bottom: 10px;
            color: #fff;
          }
          h5 {
            font-size: 15px;
            color: #FFFEFE;
            margin-bottom: 10px;
          }
          p {
            color: #00B1EB;
            font-size: 25px;
            font-weight: bold;
          }
        }
        img {
          width: 326px;
          height: 220px;
          margin-right: 69px;
          margin-top: 68px;
        }
      }
      .s2 {
        width: 445px;
        height: 267px;
        background-image: url(../assets/img/s2-b.png);
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        img {
          width: 279px;
          height: 200px;
          margin-right: 13px;
          margin-top: 33px;
        }
        .s2-text {
          margin-left: 29px;
          margin-top: 80px;
          color: #fff;
          line-height: 1.2;
          font-size: 25px;
          font-weight: bold;
        }
      }
      .s3 {
        width: 445px;
        height: 267px;
        background-image: url(../assets/img/s3.png);
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        .s3-text {
          margin-top: 80px;
          margin-left: 36px;
          h4 {
            font-size: 25px;
            color: #fff;
            font-weight: bold;
            line-height: 1.1;
            margin-bottom: 17px;
          }
          p {
            font-size: 12px;
            color: #fff;
            line-height: 1.4;
          }
        }
      }
    }
  }
</style>
