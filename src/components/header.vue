<template>
  <div class="header fsb" :class="{fixed:isScroll}">
    <div class="logo df-ac">
      <img src="../assets/img/logo.png" alt="">
      <div class="lange df">
        <div class="lange-item active">En</div>
        <div class="lange-item">中文</div>
      </div>
    </div>
    <div class="df-ac pr">
      <div class="btn-w fz12 c-333">Obtain Listen </div>
      <img src="../assets/img/icon.png" class="icon-s" @click="showMore">
      <div class="list" v-show="show">
        <div class="list-item df-ac"><img src="../assets/img/g.png" alt=""> 技术白皮书</div>
        <div class="list-item df-ac"> <img src="../assets/img/g.png" alt="">常见问题</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  props: {
    isScroll: {
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      show:false
    }
  },
  methods: {
    showMore() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="less">
  .header {
    width: 100%;
    padding: 70px 100px;
    &.fixed {
      background-color: #000;
      padding:20px 100px ;
      top: 0;
      left: 0;
    }
    .logo {
      img {
        width: 193px;
        height: 21px;
        margin-right: 140px;
      }
      .lange {
        .lange-item {
          color: #949494;
          font-size: 12px;
          margin-right: 20px;
          &.active {
            color: #fff;
            font-size: 14px;
            position: relative;
            &:after {
              content: "";
              position: absolute;
              width: 8px;
              height: 2px;
              background-color: #fff;
              bottom: -10px;
              left: 50%;
              transform: translateX(-50%);

            }
          }
        }
      }
    }
    .btn-w {
      text-align: center;
      background-color: #fff;
      margin-right: 50px;
      padding: 6px 10px;
      border-radius: 4px;
      /*line-height: 1;*/
    }
    .icon-s {
      width: 24px;
      height: 21px;
      cursor: pointer;
    }
    .list {
      position: absolute;
      width: 220px;
      height: 200px;
      background-image: url(../assets/img/bb.png);
      background-size: cover;
      background-repeat: no-repeat;
      bottom: -210px;
      left: 0;
      padding-top: 70px;
      padding-left: 20px;
      .list-item {
        color: #fff;
        font-size: 18px;
        margin-bottom: 40px;
        img {
          width: 30px;
          height: 30px;
          margin-right: 20px;
        }
      }
    }
  }
</style>
