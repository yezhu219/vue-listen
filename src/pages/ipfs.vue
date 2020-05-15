<template>
  <div class="ipfs">
    <myHeader></myHeader>
    <div class="content fsb">
      <div class="left">
        <articleItem v-for="item in articleList" :datas="item" :key="item.id"></articleItem>
        <div class="more fz7 c-fff">查看更多</div>
      </div>
      <div class="right">
        <news></news>
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
  import articleItem from '@/components/article.vue'
  import news from '@/components/news.vue'
  export default {
    data () {
      return {
        articleList: [
          {id:1,time:'2020-08-20', img:require('../assets/img/i-1.png'),title:'【IPFS】未来不可预测，下一代互联网或将由此诞',des:'作为号称将会取代HTTP协议的项目，IPFS还未上线便已饱受非议。按照IPFS的设想，HTTP协议被取代后的下一代互联网将解决'},
          {id:2,time:'2020-08-20', img:require('../assets/img/i-1.png'),title:'【IPFS】未来不可预测，下一代互联网或将由此诞',des:'作为号称将会取代HTTP协议的项目，IPFS还未上线便已饱受非议。按照IPFS的设想，HTTP协议被取代后的下一代互联网将解决'},
          {id:3,time:'2020-08-20', img:require('../assets/img/i-1.png'),title:'【IPFS】未来不可预测，下一代互联网或将由此诞',des:'作为号称将会取代HTTP协议的项目，IPFS还未上线便已饱受非议。按照IPFS的设想，HTTP协议被取代后的下一代互联网将解决'},
          {id:4,time:'2020-08-20', img:require('../assets/img/i-1.png'),title:'【IPFS】未来不可预测，下一代互联网或将由此诞',des:'作为号称将会取代HTTP协议的项目，IPFS还未上线便已饱受非议。按照IPFS的设想，HTTP协议被取代后的下一代互联网将解决'},
        ]
      }
    },
    methods: {},
    components: {
      myHeader,
      myFooter,
      hot,
      articleItem,
      news
    }
  }
</script>

<style lang="less">
.ipfs {
  background-color: rgb(248, 248, 248);
  .content {
    margin: 10px 80px;
    .left {
      width: 605px;
    }
    .more {
      background-color: #0B0B0B;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
  }
}
</style>
