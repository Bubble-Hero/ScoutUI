<template>
  <div>
    <!--自己的组件分类-->
    <h2>顶部组件</h2>
    <!--组件单例盒子-->
    <header01></header01>
    <header02></header02>
  </div>
</template>

<script>
    import Header01 from "./header01";
    import Header02 from "./header02";
    export default {
        name: "headerBox",
      components: {Header02, Header01}
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
