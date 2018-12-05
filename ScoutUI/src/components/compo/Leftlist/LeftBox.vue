<template>
  <div>
    <!--自己的组件分类-->
    <h2>后台响应侧边栏组件</h2>
    <!--组件单例盒子-->
    <leftcompon></leftcompon>
  </div>
</template>

<script>
    import Leftcompon from "./Leftcompon";
    export default {
        name: "LeftBox",
      components: {Leftcompon}
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
