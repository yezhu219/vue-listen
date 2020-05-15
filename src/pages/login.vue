<template>
  <div class="login">
    <myHeader></myHeader>
    <div class="content">
      <div class="login-box">
        <h4>登录或创建帐户！</h4>
        <div class="form-item"><i class="icon"></i><input type="text"></div>
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
  .login {
    .content {
      min-height: 311px;
      background-image: url(../assets/img/bg-login.png);
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
      .login-box {
        width: 218px;
        height: 207px;
        background-image: url(../assets/img/l-bg.png);
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
      }
    }
  }
  .form-item {
    width: 170px;
    height: 24px;
    line-height: 24px;
  }
</style>
