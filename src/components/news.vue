<template>
  <div class="news">
    <div class="title fsb fz8 mb-10">
      <div>最新文章</div>
      <div>查看更多</div>
    </div>
    <div class="n-list">
      <div class="n-item">
        <div class="n-tilte fz7 c-20">席卷全球的下一“金矿”IPFS已悄然而至！</div>
        <div class="df-ac fz6 c-b0"><img src="../assets/img/time.png" alt="" class="time">2020-01-20</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less">
  .news {
    background-color: #fff;
    padding: 0 10px;
    width: 170px;
    .title {
      padding: 13px 0 7px 0;
      border-bottom: 1px solid #EDEDED;
    }
    .n-list {
      .n-item {
        margin-bottom: 10px;
        .n-title {
          position: absolute;
          padding-left: 7px;
          &:after {
            position: absolute;
            content: '';
            background-color: #DDDDDD;
            width: 2px;
            height: 2px;
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
          }
        }
      }
    }
    .time {
      width: 6px;
      height: 6px;
      margin: 4px;
    }
  }
</style>
