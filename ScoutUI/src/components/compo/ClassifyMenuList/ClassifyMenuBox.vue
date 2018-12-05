<template>
  <div>
    <!--自己的组件分类-->
    <h2>分类菜单组件</h2>
    <!--组件单例盒子-->
    <!--第一种-->
    <classify-menu-com></classify-menu-com>
    <!--第二种-->
    <classify-menu-com2></classify-menu-com2>
    <!--第三种-->
    <class-menu-com3></class-menu-com3>
  </div>
</template>

<script>
    import ClassifyMenuCom from "./ClassifyMenuCom";
    import ClassifyMenuCom2 from "./ClassifyMenuCom2";
    import ClassMenuCom3 from "./ClassMenuCom3";
    export default {
        name: "ClassifyMenuBox",
      components: {ClassMenuCom3, ClassifyMenuCom2, ClassifyMenuCom}
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
