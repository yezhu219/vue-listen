<template>
  <div style="height: 100vh;overflow-y: scroll" ref="container" @scroll="changeScroll">
    <div class="page-index fz30" :class="[showFooter?'pdb':'']">
      <myHeader class="fix-header" :isScroll="isScroll"></myHeader>
      <div class="s1">
        <div class="line"></div>
        <div class="t1 fz14 c-fff">listen more，think more</div>
        <div class="des">
          <h2>The art of listening</h2>
          <p class="des1">Listen is a voice social software based on data decentralized storage technology and blockchain technology.</p>
        </div>

        <div class="df">
          <div class="btn bg-d7 c-47 mr-40">Obtain Listen</div>
          <!-- <div class="btn btn-boder c-d7 df-ac"><img src="../assets/img/icon-play.png" alt="" class="icon-play"> Open Listen</div> -->
        </div>
        <div class="small-i">
          <img src="../assets/img/s.png" alt="">
          <img src="../assets/img/b.png" alt="" class="btx">
        </div>
      </div>
      <swiper :options="swiperOptions" ref="mySwiper">
          <swiper-slide class="swiper-slide" >
              <div class="page p1">
                <div class="item">
                  <div>
                    <div class="i-title">- Value transfer</div>
                    <div class="i-li">Data is no longer kept and developed by centralized organizations. The data will be stored in a decentralized manner and authorized by the user.</div>
                    <div class="i-li">Personal privacy is stored locally and encrypted, and users are authorized to use it for a fee.</div>
                    <div class="i-li">The right to speak and decide are dispersedly controlled, users decide the survival of groups, and group awareness is the best way to resist censorship.</div>
                  </div>
                  <img src="../assets/img/s1.png" alt="" class="s-img">
                  <div class="dot">
                    <div class="dot-t df-ac">
                      <div>01</div>
                      <div class="arr">
                        <img src="../assets/img/up.png" alt="" class="pre"  @click="topre(0)">
                        <img src="../assets/img/down.png" alt="" class="next" @click="tonext(0)">
                      </div>
                    </div>
                    <div class="dot-b">
                      <div class="circle active"></div>
                      <div class="circle hide"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide" >
              <div class="page p2">
                <div class="item">
                  <div>
                    <div class="i-title">- Own valuesocial network</div>
                    <div class="i-li">LT bears the value of LISTEN social network. Every user no longer just uses social network, but really owns it.</div>
                    <div class="i-li">Listening to valuable expressions, expressing valuable listening.</div>
                    <div class="i-li">Every user is the governor of LISTEN underlying blockchain.</div>
                  </div>
                  <img src="../assets/img/s2.png" alt="" class="s-img">
                  <div class="dot">
                    <div class="dot-t df-ac">
                      <div>02</div>
                      <div class="arr">
                        <img src="../assets/img/up.png" alt="" class="pre" @click="topre(1)">
                        <img src="../assets/img/down.png" alt="" class="next" @click="tonext(1)">
                      </div>
                    </div>
                    <div class="dot-b">
                      <div class="circle"></div>
                      <div class="circle active"></div>
                      <div class="circle hide"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide" >
              <div class="page p3">
                <div class="item">
                  <div>
                    <div class="i-title">- Encrypted communication</div>
                    <div class="i-li">In end-to-end encrypted communications, decentralization is the best way to resist censorship.</div>
                    <div class="i-li">No ads, no tracking.</div>
                  </div>
                  <img src="../assets/img/s3.png" alt="" class="s-img">
                  <div class="dot">
                    <div class="dot-t df-ac">
                      <div>03</div>
                      <div class="arr">
                        <img src="../assets/img/up.png" alt="" class="pre"  @click="topre(2)">
                        <img src="../assets/img/down.png" alt="" class="next" @click="tonext(2)">
                      </div>
                    </div>
                    <div class="dot-b">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle active"></div>
                      <div class="circle hide"></div>
                      <div class="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide" >
              <div class="page p4">
                <div class="item">
                  <div>
                    <div class="i-title">- Value transfer</div>
                    <div class="i-li">Blockchain-based token sending is as simple as sending a Message.</div>
                    <div class="i-li">No barriers to borders, no peer-to-peer payment by intermediate service providers.</div>
                    <div class="i-li">Adapt to multiple stable currency payment networks around the world.</div>
                  </div>
                  <img src="../assets/img/s4.png" alt="" class="s-img">
                  <div class="dot">
                    <div class="dot-t df-ac">
                      <div>04</div>
                      <div class="arr">
                        <img src="../assets/img/up.png" alt="" class="pre"  @click="topre(3)">
                        <img src="../assets/img/down.png" alt="" class="next" @click="tonext(3)">
                      </div>
                    </div>
                    <div class="dot-b">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle hide"></div>
                      <div class="circle active"></div>
                    </div>
                  </div>
                </div>
              </div>
          </swiper-slide>
      </swiper>
      <div class="down" ref="down">
        <div class="text">
          <div class="d-title">Download Listen</div>
          <p>Listen, as a voice social software, is very different from other communication tools, and is also different from the podcast software. It supports social networking of acquaintances, including social methods such as voice, pictures, text, and video.</p>
          <div class="qr-box">
            <div class="qr">
              <div class="img"></div>
              <h6>Ios user</h6>
            </div>
            <div class="qr">
              <div class="img"></div>
              <h6>Android user</h6>
            </div>
          </div>
        </div>
      </div>
      <myFooter v-if="showFooter"></myFooter>
      <!-- <myFooter v-if="isScroll"></myFooter> -->
    </div>
    <!-- <div class="cover" v-if="show"> -->
    <div class="cover" :class="{fadeout:!show}" >
      <div class="desc text-c">
        <div class="fz20">The art of listening</div>
        <img src="../assets/img/logo.png" alt="" class="c-logo">
        <p>Listen is a voice social software based on data decentralized storage <br> technology and blockchain technology.</p>
      </div>
      <div  class="arrow heart" @click="handleClick">
        <!-- <img src="../assets/img/arrow.png" alt=""> -->
      </div>
      <div class="mask"  @click="handleClick"></div>
    </div>
  </div>

</template>

<script>
  import myHeader from '@/components/header'
  import myFooter from '@/components/footer'
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/swiper.less'
export default {
  data() {
    return {
      isScroll:false,
      show:true,
      showFooter:false,
      swiperOptions: {
        // pagination: {
        //   el: '.swiper-pagination'
        // },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      }
    }
  },
  created() {

  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods:{
    tonext(data) {
      this.swiper.slideTo(data+1, 1000, false)
    },
    topre(data) {
      this.swiper.slideTo(data-1, 1000, false)
    },
    changeScroll() {
      let top = this.$refs.container.scrollTop
      let downOffset = this.$refs.down.offsetTop
      let height = document.body.offsetHeight
      console.log(top)
      if(top+200>height) {
        this.showFooter = true
      }else {
        this.showFooter = false
      }
       if(top+60>=downOffset) {
        this.showFooter = false
      }

      if(top>50) {
        this.isScroll = true
      }else {
        this.isScroll = false
      }
    },
    handleClick() {
      this.show = false
    }
  },
  components: {
    myHeader,
    myFooter,
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="less">
  .cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2000;
    background-image: url(../assets/img/bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    .mask {
      height: 10%;
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
      cursor: pointer;
    }
    .desc {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: #fff;
      .c-logo {
        width: 556px;
        height: 60px;
        margin-bottom: 50px;
        margin-top: 50px;
      }
      p {
        font-size: 18px;
        line-height: 46px;
      }
    }
    .arrow {
      width: 24px;
      height: 24px;
      position: absolute;
      left: 50%;
      bottom: 40px;
      transform: translateX(-50%);
      cursor: pointer;
      background-image: url('../assets/img/arrow.png');
      background-size: cover;
      // z-index: 3000;
    }
  }
  .page-index {
    padding-bottom: 0;
    &.pdb {
      padding-bottom: 200px;
    }
    .fix-header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
    }
   .s1 {
     width: 100%;
     height: 100vh;
     background-image: url(../assets/img/bg-1.jpg);
     background-size: 100% 100%;
     background-repeat: no-repeat;
     position: relative;
     padding-top: 180px;
     padding-left: 100px;
     .small-i {
       position: absolute;
       right: 130px;
       bottom: 200px;
       img {
         width: 430px;
         height: 240px;
         &.btx {
           width: 155px;
           height: 40px;
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%,-50%);
           cursor: pointer;
         }
       }

     }
     .line {
       width: 233px;
       height: 2px;
       background-color: #fff;
       position: absolute;
       left: 0;
       top: 188px;
     }
     .t1 {
       margin-left: 435px;
       margin-bottom: 120px;
     }
     .icon-play {
       width: 24px;
       height: 24px;
       margin-right: 10px;
     }
     .des {
       color: #fff;
       h2 {
         font-size: 78px;
         font-weight: bold;
         margin-bottom: 40px;
       }
       p {
         font-size: 26px;
         line-height: 46px;
         width: 596px;
         margin-bottom: 120px;
       }
     }
   }
   .page {
     width: 100vw;
     height: calc(~'100vh - 200px');
     background-size: 100% 100%;
     background-repeat: no-repeat;
     .item {
       background-color: rgba(0,0,0,.5);
       width: 646px;
       height: 660px;
       position: absolute;
       top: 0;
       right: 100px;
       padding: 110px 20px 40px 50px;
       font-size: 18px;
       color: #fff;
       .s-img {
         width: 300px;
         height: 150px;
         position: absolute;
         left: 50px;
         bottom: 40px;
       }
       .i-title {
         color: #D7C294;
         font-size: 48px;
         margin-bottom: 20px;
       }
       .i-li {
         margin-bottom: 20px;
         line-height: 26px;
         padding-left: 30px;
         position: relative;
         &::after {
           content: '';
           position: absolute;
           left: 0;
           top: 8px;
           width: 12px;
           height: 10px;
           background-image: url(../assets/img/iocn-1.png);
           background-size: cover;
           background-repeat: no-repeat;
         }
       }
     }
     &.p1 {
       background-image: url(../assets/img/bg-2.png);
     }
     &.p2 {
       background-image: url(../assets/img/bg-3.png);
     }
     &.p3 {
       background-image: url(../assets/img/bg-4.png);
     }
     &.p4 {
       background-image: url(../assets/img/bg-5.png);
     }
   }
   .down {
     width: 100vw;
     height: calc(~'100vh - 60px');
     background-repeat: no-repeat;
     background-size: 100% 100%;
     background-image: url(../assets/img/bg-6.png);
     padding: 270px 130px;
     .text {
       width: 654px;
       .d-title {
          font-size: 48px;
          color: #D7C294;
          margin-bottom: 40px;
       }
       p {
         font-size: 24px;
         line-height: 33px;
         color: #fff;
         margin-bottom: 100px;
       }
       .qr-box {
         display: flex;
         .qr {
           font-size: 14px;
           color: #D7C294;
           margin-right: 60px;
           .img {
             width: 120px;
             height: 120px;
             background-color: #ccc;
             margin-bottom: 20px;
           }
         }
       }
     }
   }
   .dot {
     position: absolute;
     bottom: 44px;
     right: 50px;
     .dot-t {
       margin-bottom: 30px;
       font-size: 54px;
       .arr {
         img {
           width: 20px;
           height: 15px;
           margin-left: 20px;
           cursor: pointer;
         }
         .pre {
           margin-bottom: 10px;
         }
         .next {

         }
       }
     }
     .dot-b {
       display: flex;
       .circle {
          width: 10px;
           height: 10px;
          border: 1px solid #fff;
          margin-right: 10px;
          border-radius: 50%;
          &.active {
            background-color: #fff;
          }
          &.hide {
            opacity: 0;
          }
       }
     }
   }
  }
  .fadeout {
    animation: moveout 1s .1s ease both ;
  }
  .heart {
    z-index: 9999;
     animation: bounce 1s .1s  ease infinite ;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0px);
      bottom: 40px;
    }
    50% {
     transform: translateY(-10px);
      bottom: 60px;
    }
    100% {
     transform: translateY(0px);
     bottom: 40px;
    }
  }
  @keyframes moveout {
    0% {
      // height: 100%;
      top: 0;
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      // height: 0;
      top: -100%;
      opacity: 0;
    }
}
</style>
