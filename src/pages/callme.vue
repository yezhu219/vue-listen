<template>
  <div class="callme">
    <myHeader></myHeader>
    <div class="content">
      <div class="c-l">
        <div class="title fz20 fw-600 c-000 lh-1"><span class="c-00b fw-600">零一方体</span> <br>让数字空间更有价值</div>
        <div class="line-b"></div>
        <div class="tel df">
          <div class="fz10 fw-600" style="flex:0 0 50%"><h5  class="fw-600">服务热线 </h5><p class="c-00b fw-600">028-85257831</p></div>
          <div class="fz10 fw-600" style="flex:0 0 50%"><h5 class="fw-600">在线QQ     </h5><p class="c-00b fw-600"><span class="fw-600 mr-10">203857819</span>023485912  </p></div>
        </div>
        <div class="phone df">
          <div class="fz10" style="flex:0 0 50%">
            <h5 class="fw-600">售前电话 </h5>
            <p class="mb-15"> <span class="fw-600 c-00b">18780108137</span>（大客户经理）</p>
            <div class="fz8" style="color: #888;">服务时间：周一到周日9：00-22：00</div>
          </div>
          <div class="fz10" style="flex:0 0 50%">
            <h5 class="fw-600">微信咨询</h5>
            <div class="df">
              <div class="qr-c ">
                <img src="../assets/img/qr-c1.png" alt="">
                <p>公众号</p>
              </div>
              <div class="qr-c ">
                <img src="../assets/img/qr-c1.png" alt="">
                <p>公众号</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="c-r">
        <img src="../assets/img/dt.png" alt="">
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
  .callme {
    .content {
      padding: 60px 28px 75px 80px;
      background-color: #F8F8F8;
      display: flex;
      .c-l {
        flex:1;
        .title {
          margin-bottom: 17px;
        }
        .line-b {
          width: 11px;
          height: 2px;
          background-color: #000;
          margin-bottom: 35px;
        }
        .tel {
          margin-bottom: 36px;
          h5 {
            margin-bottom: 5px;
          }

        }
        .phone {
          h5 {
            margin-bottom: 20px;
          }
          .mb-15 {
            margin-bottom: 13px;
          }
          .qr-c {
            text-align: center;
            margin-right: 27px;
            img {
              width: 72px;
              height: 72px;
              margin-bottom: 3px;
            }
            p {
              font-size: 7px;
              color: #202020;
            }
          }
        }
      }
      .c-r {
        width: 452px;
        height: 279px;
        margin-left: 67px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

</style>
