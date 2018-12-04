<template>
    <div>
      <!--自己的组件分类-->
      <h2>按钮组件</h2>
      <!--组件单例盒子-->
      <common-compon></common-compon>
    </div>
</template>

<script>
    import CommonCompon from "./commonCompon";
    export default {
        name: "commonBox",
      components: {CommonCompon}
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
