<template>
  <div>
    <!--自己的组件分类-->
    <h2>底部组件</h2>
    <!--组件单例盒子-->
    <footer01></footer01>
    <footer02></footer02>
  </div>
</template>

<script>
    import Footer01 from "./footer01";
    import Footer02 from "./footer02";
    export default {
        name: "footerBox",
      components: {Footer02, Footer01}
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
