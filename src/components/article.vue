<template>
  <div class="article df">
    <img :src="datas.img" alt="" class="art-img">
    <div class="art-content">
      <div>
        <h4>{{datas.title}}</h4>
        <p>{{datas.des}}</p>
      </div>
      <div class="time df"><img src="../assets/img/time.png" alt="" class="icon-time">{{datas.time}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      datas: {
        type: Object
      }
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less">
  .article {
    background-color: #fff;
    margin-bottom: 5px;
    padding: 15px 10px;
    border-radius: 2px;
    .art-img {
      width: 130px;
      height: 75px;
      margin-right: 12px;
    }
    h4 {
      font-weight: bold;
      font-size: 10px;
      color: #202020;
      margin-bottom: 8px;
    }
    p {
      font-size: 7px;
      color: #888888;
      line-height: 11px;
      margin-bottom: 20px;
    }
    .icon-time {
      width: 6px;
      height: 6px;
      margin-top: 6px;
    }
    .art-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .time {
      font-size: 6px;
      color: #B0B0B0;
      img {
        margin-top: 0;
        margin-right: 6px;
      }
    }
  }
</style>
