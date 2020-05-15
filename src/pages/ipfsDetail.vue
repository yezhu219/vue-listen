<template>
  <div class="ipfsDetail">
    <myHeader></myHeader>
    <div class="header-nav c-999">您现在的位置：首页 > 文章详细</div>
    <div class="content fsb fz7">
      <div class="left bg-f">
        <div class="main ">
          <div class="m-top fsb">
            <div class="df left-box">
              <div class="m-title c-20 fw-600 mb-20">【IPFS】未来不可预测，下一代互联网或将由此诞</div>
              <div class="df"><img src="../assets/img/time.png" alt="" class="time">2020-08-20</div>
            </div>
            <div class="btn-back">返回列表</div>
          </div>
          <div class="desc">
            近日，据卖家爆料，亚马逊正在对卖家账号售卖的产品对应的营业执照经营范围提出了一致性要求。

            根据亚马逊通知的内容显示，在收到邮件的14天内，营业范围不一致的卖家需要去当地工商局更新注册公司的营业范围，并提供亚马逊所需要的信息。若没有提供要求的信息，卖家账号将受到如下限制：
          </div>
          <div class="text">
            而Filecoin天生自带巨大的分布式存储，与IPFS之间相互激励。IPFS使用的更多，对Filecoin的需求更大，存储需求更大，Filecoin的矿工节点便越多，对IPFS的支撑力度就越大，整个网络会变得更好用。
          </div>
          <div class="share-group df">
            <span>分享：</span>
            <img src="../assets/img/qq@2x.png" alt="">
            <img src="../assets/img/微信@2x.png" alt="">
            <img src="../assets/img/新浪@2x.png" alt="">
          </div>
        </div>
        <div class="main-footer df">
          <div class="footer-item fsb">
            <div>疫情影响下，大多数矿工要求IPFS/FIL测试网延期？</div>
            <div>上一页</div>
          </div>
          <div class="footer-item fsb">
            <div>下一页</div>
            <div>Filecoin将如何处理人类正在生成的所有数据？</div>
          </div>
        </div>
      </div>
      <div class="right">
        <hot></hot>
      </div>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
  import myHeader from '@/components/header.vue'
  import  myFooter from '@/components/footer.vue'
  import hot from '@/components/hot.vue'
  export default {
    data () {
      return {}
    },
    methods: {},
    components: {
      myHeader,
      myFooter,
      hot
    }
  }
</script>

<style lang="less">
.ipfsDetail {
    background-color: rgba(248, 248, 248);
  .header-nav {
    font-size: 6px;
    padding: 10px 0;
    margin-left: 80px;
  }
  .content {
    margin: 0px 80px;
    .left {
      width: 605px;
      padding: 20px 25px 32px 22px;
      .main {
        .desc {
          padding: 20px;
          background-color: #F4F4F4;
          color: #666;
          margin-bottom: 28px;
        }
        .text {
          margin-bottom: 50px;
        }
        .share-group {
          padding-bottom: 20px;
          border-bottom: 1px solid #EDEDED;
          img {
            width: 10px;
            height: 8px;
            margin-left: 18px;
          }
        }
      }
      .main-footer {
        padding: 16px 0;
        .footer-item {
          flex: 0 0 50%;
          &:first-child {
            padding-right: 10px;
            border-right: 1px solid #DDDDDD;
          }
          &:last-child {
            padding-left: 10px;
          }
          &:hover {
            color: #00B1EB;
          }
        }
      }
      .m-top {
        .m-title {
          font-size: 15px;
        }
        .left-box {
          flex-direction: column;
          padding-bottom: 22px;
          border-bottom: 1px solid #EDEDED;
          margin-bottom: 16px;
        }
        .btn-back {
          width: 80px;
          height: 20px;
          background-color: #00B1EB;
          color: #fff;
          text-align: center;
          line-height: 20px;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
