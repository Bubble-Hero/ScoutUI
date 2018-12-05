<template>
    <div>
      <!--自己的组件分类-->
      <h2>登录注册组件</h2>
      <!--组件单例盒子-->
     <login-sub-com></login-sub-com>
    </div>
</template>

<script>
    import LoginSubCom from "./LoginSubCom";
    export default {
        name: "LoginSubBox",
      components: {LoginSubCom,}
    }
</script>

<style scoped>
  h2{
    width: 100%;
    line-height: 40px;
    font-size: 24px;
    margin: 20px 0 10px;
    color: #17b6ad;
  }
</style>
