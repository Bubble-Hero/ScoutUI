<template>
  <div>
    <!--自己的组件分类-->
    <h2>商品列表</h2>
    <!--组件单例盒子-->
    <goodlist-component></goodlist-component>
    <goodlist-component2></goodlist-component2>
    <goodlist-component3></goodlist-component3>
  </div>
</template>

<script>
  import GoodlistComponent from "./GoodlistComponent";
  import GoodlistComponent2 from "./GoodlistComponent2";
  import GoodlistComponent3 from "./GoodlistComponent3";
  export default {
    name: "GoodlistBox",
    components: {GoodlistComponent3, GoodlistComponent2, GoodlistComponent}
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
