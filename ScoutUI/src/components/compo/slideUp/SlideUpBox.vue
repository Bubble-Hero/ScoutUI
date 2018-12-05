<template>
  <div>
    <!--自己的组件分类-->
    <h2>上拉菜单组件</h2>
    <!--组件单例盒子-->
    <slide-up-component1></slide-up-component1>
    <slide-up-component2></slide-up-component2>
    <slide-up-component3></slide-up-component3>
  </div>
</template>

<script>
  import SlideUpComponent1 from "./SlideUpComponent1";
  import SlideUpComponent2 from "./SlideUpComponent2";
  import SlideUpComponent3 from "./SlideUpComponent3";
  export default {
    name: "SlideUpBox",
    components: {SlideUpComponent3, SlideUpComponent2, SlideUpComponent1}
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
