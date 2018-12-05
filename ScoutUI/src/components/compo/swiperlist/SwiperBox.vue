<template>
  <div>
    <h2>轮播组件</h2>
      <swipercompon></swipercompon>
  </div>
</template>

<script>
    import Swipercompon from "./Swipercompon";
    export default {
        name: "SwiperBox",
      components: {Swipercompon}
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
