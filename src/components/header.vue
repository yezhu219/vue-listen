<template>
  <div class="header fsb" :class="{isBlack:!black,'bg-f':!black}">
    <div class="logo cp" @click="toIndex">
      <img src="../assets/img/logo-b.png" alt="" v-if="black">
      <img src="../assets/img/logo.png" alt="" v-else>
    </div>
    <div class="nav text-c">
      <div class="nav-item" v-for="item in nav" :key="item.id" @mouseenter="moveIn(item)" @mouseleave="moveOut(item)">
        <div :class="[item.show?'c-00b':'c-fff']" class="df-cc" @click.stop="goDetail(item.url)">
          <span :class="[black?'c-fff':'c-20']">{{item.name}}</span>
          <img src="../assets/img/sj.png" class="sj" :class="[item.show?'active':'']" v-if="item.children.length>0">
        </div>
        <div class="nav-item-child" v-for="ch in item.children" :key="ch.id" v-show="item.show">
          <div class="nav-item-child-item" @click.stop="goDetail(ch.url)">{{ch.name}}</div>
        </div>
      </div>
      <div class="lang sp" :class="{black:!black}">EN</div>
      <div class="lang sp df-cc"><img src="../assets/img/per.png" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    black: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      nav: [
        {
          id:1,
          name:'首页',
          url:'/',
          show:false,
          children:[]
        },
        {
          id:2,
          name:'为你服务',
          url:'',
          show:false,
          children:[
            {id:21,name:'买矿机',url:'/goods'},
            {id:22,name:'找托管',url:'/trust'},
            {id:23,name:'其他服务',url:'/otherServe'},
          ]
        },
        {
          id:3,
          name:'资讯入口',
          url:'',
          show:false,
          children:[
            {id:31,name:'IPFS   ',url:'/ipfs'},
            {id:32,name:'Filecoin',url:''},
            {id:33,name:'问题解答',url:'/question'}
          ]
        },
        {
          id:4,
          name:'了解我们',
          url:'',
          show:false,
          children:[
            {id:41,name:'了解我们 ',url:'/about'},
            {id:42,name:'联系我们',url:'/callme'}
          ]
        },
      ],
      showChild:false
    }
  },
  methods: {
    handleSelect() {

    },
    toIndex() {
      this.$router.push('/')
    },
    goDetail(url) {
      this.$router.push(url)
    },
    moveIn(data) {
      this.nav.forEach(item=>{
        if(item.id==data.id) {
          item.show = true
        }
      })
    },
    moveOut(data) {
      this.nav.forEach(item=>{
        if(item.id==data.id) {
          item.show = false
        }
      })
    }
  }
}
</script>

<style lang="less">
  .header {
    padding:23px 18px;
    .logo {
      img {
        width: 138px;
        height: 27px;
      }
    }
    .nav {
      display: flex;
      border: 1px solid rgba(255,255,255,.1);

      .nav-item {
        width: 92px;
        height: 27px;
        line-height: 27px;
        font-size: 8px;
        cursor: pointer;
        border-right: 1px solid rgba(255,255,255,.1);
        .nav-item-child {
          position: relative;
          z-index: 500;
        }
        .nav-item-child-item {
          color: #fff;
          background-color: #04060A;
          &:hover {
            color: #00B1EB;
          }
        }
      }
      .sj {
        width: 5px;
        height: 4px;
        margin-left: 5px;
        &.active {
          transform: rotate(-180deg);
        }
      }
    }
    .lang {
      width: 30px;
      height: 27px;
      line-height: 27px;
      font-size: 8px;
      color: #fff;
      border-right: 1px solid rgba(255,255,255,.1);
      &:last-child {
        border: none;
      }
      &.black {
        color: #000;
      }
      img {
        width: 7px;
        height: 9px;
      }
    }
    &.isBlack {
      .nav {
        border: 1px solid #DDDDDD;
        .nav-item {
          border-right: 1px solid #DDDDDD;
        }
      }
      .lang {
        border-right: 1px solid #DDDDDD;
        &:last-child {
          border: none;
        }
      }
    }
  }
</style>
