<template>
  <div class="hot">
    <div class="h-title ">热门文章</div>
    <div class="img-item">
      <img src="../assets/img/s2.png" alt="">
      <div class="m-title">万亿级风口！从5G到区块链，IPFS将颠覆...</div>
    </div>
    <div class="a-item df">
      <img src="../assets/img/s2-b.png" alt="" class="a-img">
      <div class="a-content">
        <h4>IPFS迅速崛起，Filecoin价值 千万！</h4>
        <div class="fz6 a-footer fsb">
          <div class="df-ac"><img src="../assets/img/time.png" alt="" class="time"><span>2020-8-20</span></div>
          <div class="df-ac"><img src="../assets/img/view.png" alt="" class="view"><span>223</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      datas: {

      }
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less">
  .hot {
    width: 170px;
    padding: 0 10px;
    background-color: #fff;
    padding-bottom: 12px;
    .h-title {
      color: #202020;
      font-size: 8px;
      padding-top: 13px;
      padding-bottom: 7px;
      border-bottom: 1px solid #EDEDED;
    }
    .img-item {
      width: 100%;
      padding: 7px 0;
      margin-bottom: 7px;
      position: relative;
      border-bottom: 1px solid #EDEDED;
      img {
        height: 75px;
        width: 100%;
      }
      .m-title {
        padding: 7px;
        background-color: rgba(0,0,0,.7);
        font-size: 7px;
        color: #fff;
        position: absolute;
        bottom: 7px;
        width: 100%;
        left: 0;
      }
    }
    .a-item  {
      margin-bottom: 6px;
      .a-img {
        width: 50px;
        height: 30px;
        border-radius: 2px;
        margin-right: 6px;
      }
      h4 {
        font-size: 7px;
        color: #202020;
        line-height: 1.2;
      }

      .a-footer {
        color: #B0B0B0;
        .df-ac {
          font-size: 6px;
        }
        .time {
            width: 6px;
            height: 6px;
            margin-right: 5px;
        }
        .view {
            width: 10px;
            height: 5px;
            margin-right:  5px;
        }
      }
      .a-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 2px;
      }
    }
  }
</style>
