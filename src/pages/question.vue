<template>
  <div class="question bg-r">
    <myHeader></myHeader>
    <div class="b-title fz12 c-20 fw-600">问题解答</div>
    <div class="content">
      <div class="question-item " v-for="item in 6" :key="item">
        <div class="q-title fz8 fw-600 c-20" :class="{active:isClick}">如果硅谷被吞噬，Web 3.0数据经济将获胜 中国网民破9亿，数字经济蓬勃发展！ 广厦东阳三建广西分公司QC成果获奖 广厦建设</div>
        <div class="btn-view df-cc" :class="{active:isClick}"><img src="../assets/img/eye.png" alt="" @click="getAnswer(item)"></div>
        <div class="answer" v-show="isClick">
          数字经济蓬勃发展的同时也推动了数字基础设施的产业布局， 数字基础设施是新型基础设施，能够在物理世界之上孕育出新价值网络和新服务
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
      return {
        current:'',
        isClick: false
      }
    },
    methods: {
      getAnswer(data) {
        this.current = data
        this.isClick = true
      }
    },
    components: {
      myHeader,
      myFooter
    }
  }
</script>

<style lang="less">
.question {
  .b-title {
    margin-left: 80px;
    padding: 14px 0 18px 0;
  }
  .content {
    margin: 0 80px;
    padding-bottom: 56px;
  }
  .question-item {

    border:1px solid rgba(230, 230, 230, 1);
    position: relative;
    margin-bottom: 10px;
    background-color: #fff;
    .q-title {
      /*width: 800px;*/
      height: 45px;
      line-height: 45px;
      padding-left: 27px;
      &.active {
        background-color: #00B1EB;
        color: #fff;
        
      }
    }
    .btn-view {
      position: absolute;
      top: 0px;
      right: 0;
      width: 45px;
      height: 45px;
      background-color: #E6E6E6;
      &.active {
        background-color: #00698C;
      }
      img {
        width: 16px;
        height: 10px;
      }
    }
    .answer {
      padding: 14px 66px 14px 27px;
      font-size: 8px;
      color: #666;
      background-color: #fff;
    }
  }
}
</style>
